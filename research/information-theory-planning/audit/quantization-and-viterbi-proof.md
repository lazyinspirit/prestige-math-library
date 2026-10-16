# Finite quantization, companders and trellis decoding developments

Independent research development for the owner-authorized category expansion. No production or acceptance claim. Natural logarithms are used unless bit lengths are stated explicitly.

## Finite quantizers and centroid minimization

For a Borel law P on R^d, d>=1, with finite second moment, a k-level reproduction tuple c=(c_1,...,c_k), k>=1, defines Q_c(x) as the smallest index minimizing ||x-c_j||^2. Its cell j is the intersection of {||x-c_j||<||x-c_l||} for l<j and {||x-c_j||<=||x-c_l||} for l>j, hence Borel. The distortion J(c)=E||X-c_{Q_c(X)}||^2 is finite: it is at most 2E||X||^2+2 max_j||c_j||^2. Cells may be empty and centers may coincide; no unproved distinctness assumption is imposed.

For nonempty finite weighted data x_i in R^d with weights w_i>0, sum_iw_i=1, and a cluster S with weight W_S>0, its centroid mu_S=sum_{i in S}w_i x_i/W_S uniquely minimizes the cluster squared error. Expanding x_i-c=(x_i-mu_S)+(mu_S-c) and summing gives the exact identity

sum_{i in S}w_i||x_i-c||^2=sum_{i in S}w_i||x_i-mu_S||^2+W_S||c-mu_S||^2.

The cross term vanishes because sum_{i in S}w_i(x_i-mu_S)=0. Empty clusters have cost zero for every center, so a deterministic empty-cluster policy is essential.

## Exact finite-data Lloyd procedure and termination

Inputs: N>=1 weighted data points as above, k>=1 initial centers c_j^0, and fixed index orders. Use exact comparisons/arithmetic (or rational inputs for an ordinary exact rational implementation). At iteration t assign every point to its nearest center with smallest-index tie rule. Replace each nonempty cluster center by its weighted centroid; leave each empty-cluster center unchanged. If all centers equal their previous values, output the current centers/assignments and stop; otherwise repeat.

Assignment minimizes cost at fixed centers. The centroid identity shows that every nonempty-center change strictly decreases the assigned cost, and the next assignment cannot increase it. Thus if centers change the objective J(c) strictly decreases. Each center at every iteration belongs to the finite set consisting of its own initial value plus centroids of nonempty subsets of the N data points. There are at most 2^N choices per coordinate center, hence at most 2^(Nk) ordered center configurations. A strict-decrease iteration cannot repeat a configuration. Therefore the procedure terminates after finitely many iterations (this crude bound is exponential, not an efficiency claim). At termination every nonempty center is its assigned centroid and every assigned point is nearest to its center; it is a coordinatewise minimizer, with no global-optimum claim. One iteration takes O(Nkd) scalar operations/comparisons plus O(Nd+kd) centroid work. These are exact-arithmetic counts; rational bit complexity depends on input sizes, and arbitrary-real equality needs the declared comparison oracle.

Global empirical optimum exists by a separate finite algorithm: enumerate every assignment a:[N]->[k], compute each nonempty cluster centroid (use x_1 for empty clusters), evaluate its exact weighted cost, and keep the first minimum in a fixed enumeration. There are k^N assignments, each processed with O((N+k)d) arithmetic work. Any centers/assignment pair is improved or preserved by replacing its centers with these centroids, and nearest reassignment improves or preserves again. Hence enumeration attains the global joint minimum and its nearest-center quantizer is globally optimal. This proves existence/correctness independently of Lloyd's local iteration.

A concrete suboptimal Lloyd fixed point: equal weights on {0,1,4,5,9}, k=2, centers (5/2,9). Its nearest clusters are {0,1,4,5} and {9}, already centered, with total unnormalized cost 17 and average 17/5. The alternative centers (1/2,6), clusters {0,1} and {4,5,9}, have costs 1/2 and 14, average 29/10<17/5. All nearest comparisons are strict, so this counterexample does not depend on ties.

## Restricted one-dimensional compact compander theorem

Let a<b, let f,g be positive C^1 functions on [a,b], with integral f=integral g=1. P has density f on [a,b] and zero outside. Define G(x)=integral_a^x g, its inverse phi:[0,1]->[a,b], boundaries b_j=phi(j/N), and reproduction r_j=phi((j-1/2)/N), j=1,...,N. Quantize each cell [b_{j-1},b_j), putting endpoint b in the final cell. This is a Borel N-level quantizer. Its mean squared error D_N satisfies

lim_{N->infinity} N^2 D_N=(1/12)integral_a^b f(x)/g(x)^2 dx.

Proof: positivity/compactness bound g away from zero. The inverse-function rule gives phi'=1/(g circ phi); g in C^1 makes phi'' continuous bounded. Write F(u)=f(phi(u))/g(phi(u)), a C^1 function with bounded derivative. On the u-cell of midpoint v_j=(j-1/2)/N, uniform Taylor estimates give phi(u)-phi(v_j)=phi'(v_j)(u-v_j)+O((u-v_j)^2) and F(u)=F(v_j)+O(|u-v_j|). Therefore

F(u)[phi(u)-phi(v_j)]^2=F(v_j)phi'(v_j)^2(u-v_j)^2+O(|u-v_j|^3)

with one constant independent of j,N. Integrating the symmetric cell gives its leading term F(v_j)phi'(v_j)^2/(12N^3) and O(N^-4) remainder. Summing N cells and multiplying by N^2 gives (1/12)N^-1sum_jF(v_j)phi'(v_j)^2+O(N^-1). The midpoint Riemann sum converges; substitution u=G(x) gives integral_0^1F(u)phi'(u)^2du=integral_a^b f/g^2. This proves the stated limit with all endpoint/overload behavior fixed (there is no mass outside the compact support).

Among these positive normalized C^1 point densities, the leading coefficient is minimized by g*=f^(1/3)/integral f^(1/3), and its value is (1/12)(integral f^(1/3))^3. Holder with exponents 3 and 3/2 gives integral f^(1/3)=integral(f/g^2)^(1/3)g^(2/3)<=(integral f/g^2)^(1/3)(integral g)^(2/3). Equality holds exactly when g^3 is proportional to f, and f>0,C^1 makes g* admissible. This is an optimum within the stated compander asymptotic class, not a proof of all-dimensional Zador constants or unrestricted optimal high-rate quantizers. For N=2^R the quantizer has exact R-bit indices; arbitrary N needs ceil(log2 N) bits. Broader unbounded-source overload and nonsmooth/vanishing-density cases require separate arguments.

## Finite layered-trellis dynamic programming (Viterbi)

Input: N>=0, finite ordered state sets S_0,...,S_N, finite ordered edges E_t from S_{t-1} to S_t, initial costs a(s) in R union {+infinity}, terminal set F subset S_N, and edge costs c_t(e) in R union {+infinity}. Parallel edges are distinguished by their fixed edge indices. Minus infinity is excluded, so finite additions and +infinity propagation are unambiguous. A feasible path has finite initial and all finite edge costs and ends in F. Output a minimum-cost feasible path/cost, or 'no finite feasible path'. Empty state/terminal/edge sets and N=0 are legal.

Set delta_0(s)=a(s). For t=1,...,N compute delta_t(v)=min_{e:u->v}[delta_{t-1}(u)+c_t(e)], with min empty=+infinity. Store the first minimizing incoming edge in the fixed order when the minimum is finite; store no predecessor for infinite minima. At stage N choose the first terminal minimizing delta_N. If its cost is infinite (or F empty), return failure. Otherwise follow the stored edges backward and reverse them. N=0 simply minimizes the initial costs on F.

Induction proves delta_t(v) is the minimum cost of a length-t path ending at v: every such path is a prefix ending at some u followed by one incoming edge, and the displayed minimum tests exactly all these possibilities. An attained finite minimum has a stored predecessor, and induction/backtracking reconstructs a path with that cost. The finite number of stages/edges proves termination, including negative finite costs because all edges advance a layer (there are no directed temporal cycles). Complexity is O(sum_t|S_t|+sum_t|E_t|) exact additions/comparisons, with O(max_t|S_t|) cost storage plus O(sum_t|S_t|) predecessor storage; path reconstruction takes O(N). This is not a claim that every nonlinear/continuous-state decoding problem is tractable.

## Finite hidden-Markov sequence MAP interpretation

Let hidden states S be finite, initial pmf pi, transition matrices A_t row-stochastic, finite observation alphabet O and emission pmfs b_{t,s}. Given observed y_1,...,y_N, an initial state s_0 and path s_1,...,s_N have joint weight pi(s_0) product_t A_t(s_{t-1},s_t)b_{t,s_t}(y_t). The evidence is the finite sum of these nonnegative path weights. If it is positive, maximizing posterior path probability is equivalent to maximizing this joint weight. Use a(s)=-ln pi(s), edge cost -ln A_t(u,v)-ln b_{t,v}(y_t), with zero factors mapped to +infinity. Viterbi therefore returns a posterior-MAP path; its cost/log weight relation follows from the finite product logarithm identity. If evidence is zero, posterior conditioning is undefined and the algorithm returns 'no positive-probability path', not a fictitious MAP estimate. Deterministic tie-breaking does not change optimal probability.

Sequence MAP differs from coordinatewise marginal MAP. With two time points, initial probabilities (.4,.3,.3), transition row1=(0,.5,.5), rows2 and3=(1,0,0), and one uninformative observation symbol of probability one, the largest initial marginal is state1 (.4) and largest next marginal is state1 (.6). Their coordinatewise concatenation (1,1) has transition probability zero. Viterbi instead chooses (2,1) or (3,1), each of joint probability .3, using its fixed tie order. This is a complete finite counterexample; it does not rely on a diagram.
