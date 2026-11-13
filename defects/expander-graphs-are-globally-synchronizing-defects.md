---
title: Prerequisite omissions and potential defects
research_report: defects
description: Original-article findings for Expander graphs are globally synchronizing.
status: published
generated_at: "2026-11-13T18:09:38.925Z"
---

29 confirmed findings in the original article.

## finding-original-spurious-point-basin · confirmed

**Tags:** insufficient assumptions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 3, paragraph immediately after Definition 1.1; footnote 2 (PDF p. 3).

> converge to said minimum

A specified spurious minimum need not attract an open set, even modulo common rotation. The passage confuses trapping near a nonisolated minimum with attraction to that particular minimum. Its conclusion that spurious minima obstruct global synchrony survives.

The authors explicitly claim convergence to the specified minimum; footnote 2 only removes a common rotation, not the free relative phase in this example.

**Correction:** Use an aggregate trapping/basin assertion; require isolation of the critical rotation orbit for point-orbit attraction.

**Counterexample:** Take the two-vertex edgeless graph, common frequency zero, and phases $(0,\pi)$.

The introduction and Definition 1.1 impose no connectedness requirement. Symmetric binary adjacency is zero, so the energy is identically zero and this nonsynchronized state is a local minimum. Every rotating-frame trajectory is constant. Its rotation class has fixed relative phase $\pi$ and empty interior in the relative-phase circle. Its basin is exactly that class, hence contains no open set. The example respects footnote 2, and challenges only attraction to the specified minimum.

## finding-original-complete-graph-stationarity · confirmed

**Tags:** insufficient assumptions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 8, continuation of Remark 1.7 (PDF p. 8).

> the only states

Remark 1.7 omits stationarity from its complete-graph PSD assertion. A positive-semidefinite Hessian at a noncritical configuration does not force phase agreement.

The original sentence says states, without the equilibrium qualification used in the preceding general criterion on p. 4.

**Correction:** Restrict the assertion to equilibrium states.

**Counterexample:** $K_2$, with phases $0$ and $\pi/3$.

This is the complete graph with symmetric binary adjacency. The printed assertion assumes only PSD of the energy Hessian. The Hessian is $\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, with eigenvalues $0,1$, while the two phases differ. The state is not stationary, showing exactly why that missing hypothesis matters.

## finding-original-zero-degree-theorem-boundary · confirmed

**Tags:** insufficient assumptions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF pp. 6–8, Definitions 1.3/1.9, Theorems 1.4/1.10; contrast p. 11 (PDF p. 8).

> then G is globally synchronizing

The introductory expander theorems need a positive reference degree or an explicit connectedness restriction. The literal definitions admit zero-degree graphs. Section 2.1 later assumes connectedness, excluding the example there, but that restriction is absent from the introductory statements.

PDF p. 6 specifies an expected-average-degree choice but no positivity; p. 8 states the full numerical criterion without connectedness. The subsequent local convention on p. 11 explains the intended restriction, not a positive-degree counterexample.

**Correction:** State $d>0$ in Theorem 1.4 and $d^*>0$ in Theorem 1.10.

**Counterexample:** Use the edgeless graph on two vertices. For Theorem 1.4 set $d=0$, $\alpha=0.0816$; for Theorem 1.10 set $d^*=0$, $\alpha=10^{-4}$, $c^-=c^+=0$.

The graph is binary, symmetric and 0-regular, consistent with an expected average degree of zero. All centered matrices vanish, satisfying both expander definitions. For Theorem 1.10, $c^->-1$, $0<\alpha\le1/5$ and the scalar left side is $0.0032\log(5000.5)<0.0288<1$, since the exponential series gives $e^9>5000.5$. Every rotating-frame trajectory is constant. Only the initially synchronized diagonal converges to synchrony; that diagonal has two-dimensional phase volume zero. Thus both literal conclusions fail. This does not challenge their positive-degree versions or Section 2.1 lemmas.

## finding-original-loop-edge-equality · confirmed

**Tags:** missing proof steps

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 13, last paragraph of Lemma 2.1 proof; p. 18 loop convention (PDF p. 13).

> If the number of edges

The edge-cardinality hypothesis does not give the ordered adjacency equality when loops are allowed. The proof substitutes $\langle\mathbf1,A\mathbf1\rangle=d^*n$ from $|E|=d^*n/2$. With $\ell$ loops the actual sum is $2|E|-\ell$. The regular-graph estimate remains justified by row sums.

The authors explicitly make the edge-count-to-ordered-sum substitution; p. 18 counts loops once. Neither their regular theorem nor the refined inequality itself is refuted here.

**Correction:** Use the ordered-sum hypothesis, or supply a separate proof for the stronger looped edge-count extension.

**Counterexample:** Take the three-vertex path $1$–$2$–$3$, with loops at $1$ and $2$, $d^*=8/3$, $\alpha=3/5$, and synchronized phases.

The graph is connected, binary, symmetric and nonregular, so it avoids the special regular-graph reference convention. Its adjacency is $A=\begin{pmatrix}1&1&0\\1&1&1\\0&1&0\end{pmatrix}$. It has four unordered edges, hence $|E|=4=d^*n/2$, but six ordered adjacency entries. Its centered adjacency is $A-(8/9)J_3$; its squared Frobenius norm is $6/81+3(64/81)=22/9$, so its operator norm is at most $\sqrt{22}/3<8/5=\alpha d^*$. This reference degree is allowed by Definition 1.3. Synchronized phases are a stable global minimum, with real nonnegative order parameters and valid representatives. Nevertheless $\langle\mathbf1,A\mathbf1\rangle=6\ne8=d^*n$. This refutes only the equality, not the stronger refined inequality, which remains true at these phases.

## finding-original-real-part-sign · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 14, absolute-real-part display in Lemma 2.3 proof (PDF p. 14).

> which implies that

The far-half-circle real-part lower bound is missing a minus sign or absolute value. On that indicator support, $\cos\theta_y\le0$. The printed nonpositive lower bound alone cannot justify the next squared estimate; the preceding real-part inequality gives the intended nonnegative bound.

The rendered display prints the positive cosine, while the preceding displayed inequality and following square identify the required correction.

**Correction:** Use $-d^*\rho_1\cos\theta_y$ on the indicated support, equivalently $d^*\rho_1|\cos\theta_y|$.

## finding-original-discriminant-endpoint · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 16, discriminant paragraph in Lemma 2.5 proof (PDF p. 16).

> In particular

The discriminant is zero at the allowed endpoint $\alpha=0$. The strict-negativity sentence includes zero, where the displayed polynomial has a factor $\alpha^4$. This does not refute the order-parameter conclusions.

The original displayed discriminant and the strict inequality in the next sentence conflict at zero.

**Correction:** Handle $\alpha=0$ directly and restrict strict negativity to positive $\alpha$.

**Counterexample:** $A=J_2$, $d^*=2$, $\alpha=0$, synchronized phases.

This connected binary looped regular graph has centered adjacency zero and stable normalized phases. Thus zero is an admissible expansion value. The printed discriminant is exactly zero, not negative.

## finding-original-regular-cubic-sign · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 16, Remark 2.7 (PDF p. 16).

> the relevant cubic being now

The regular-bootstrap cubic has the wrong constant-term sign. Multiplying $2x+3\alpha-1-(1-2\alpha^2/x)^2$ by $x^2$ gives constant term $-4\alpha^4$.

The authors instruct substitution of (2.9) for (2.8); direct expansion of precisely that expression gives the negative sign. No failure of the remark’s final bounds is asserted.

**Correction:** Replace $+4\alpha^4$ by $-4\alpha^4$; check root estimates separately.

## finding-original-connectivity-quantifier · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 19, after Proposition 3.2; p. 20, Remark 3.5 (PDF p. 19).

> equivalent to the graph being connected

Connectivity does not force every admissible prescribed $c^-$ to exceed $-1$. For positive reference degree, $c^->-1$ implies connectivity. The reverse direction requires choosing a sufficiently sharp lower parameter.

The authors state an equivalence but their supplied eigenvalue argument establishes only the sufficient direction for the prescribed parameter.

**Correction:** Say that a connected graph admits such a lower bound, rather than quantifying over arbitrary admissible bounds.

**Counterexample:** $K_2$ with $d^*=1$, $\alpha=1$, $c^-=-1$, $c^+=1$.

The graph is connected and 1-regular. The centered adjacency has eigenvalues $0,-1$, so its norm is $1=\alpha d^*$. Its centered Laplacian has eigenvalues $0,1$, lying in $[-1,1]$. Thus the entire Definition 1.9 predicate holds with the prescribed $c^-=-1$, violating the asserted reverse implication.

## finding-original-tail-sine-proof · confirmed

**Tags:** missing proof steps; typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 23, proof of Lemma 4.1 (PDF p. 23).

> non-negative non-increasing function

The tail sine-square comparison in the proof is invalid. Squared sine decreases beyond $\pi/2$, so a phase tail need not have sine-square at least its cardinality times the boundary value. The stated lemma follows directly from $H$ instead.

The original display explicitly inserts the tail sine-square sum; the earlier definition of $H$ supplies a direct valid replacement.

**Correction:** Use $H(\theta_x)\ge H(\beta_M)\ge\sin^2\beta_M$ on the tail; replace “non-increasing” by nondecreasing in absolute angle.

**Counterexample:** The six-cycle with successive phases $0,\pi/3,2\pi/3,\pi,-2\pi/3,-\pi/3$; take $M=0$, $\beta_0=\pi/2$.

The graph is connected, binary and symmetric. Near this winding state the six consistently lifted edge differences remain near $\pi/3$ with sum $2\pi$. Strict convexity of $1-\cos t$ there and Jensen give a local energy minimum, hence stability. Its first order parameter is zero, satisfying the normalization. The tail has three vertices and sine-square sum $3/2<3\sin^2(\pi/2)=3$. The total-$H$ conclusion remains true.

## finding-original-large-set-degree-factor · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 25, last display in Lemma 4.3 proof; compare p. 26 (PDF p. 25).

> so by Lemma 3.6

The incident-edge estimate omits a factor $d^*$. Lemma 3.6 gives $(1+c^++\alpha)d^*|\mathcal C_{\pi/2}|$. The next page uses that factor in the contradiction.

The rendered p. 25 display lacks the reference degree, whereas the cited lemma and p. 26 restore it. This is a local transcription correction, not a counterexample to Lemma 4.3.

**Correction:** Insert $d^*$ in the p. 25 display.

## finding-original-numerical-angle-direction · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 30, sentence before geometric-tail display (PDF p. 30).

> will never produce an angle

The prose reverses the intended lower-angle invariant. It says the sequence never produces $\beta_M\ge0.131$, immediately before proving that lower bound.

The sentence and immediately following rendered display have opposite logical directions; the subsequent cap argument needs the display’s lower bound.

**Correction:** Replace the prose comparison by $\beta_M<0.131$.

## finding-original-numerical-rounding-justification · confirmed

**Tags:** missing proof steps

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 29, (5.1); p. 30, explanation of $3.326/c_i$ (PDF p. 29).

> contradiction if

Two rounded scalar deductions need stronger justification. At $\alpha=0.0816$, $5\alpha^2/4=0.0083232>0.00832$. Also $1.05\cdot3.168=3.3264>3.326$. The cited estimates alone do not give the printed rounded constants.

The exact coefficient comes from Remark 2.7; p. 30 cites the loose $1.05x$ bound for the smaller printed coefficient. This identifies scalar proof gaps, not a graph counterexample or failure of the numerical threshold.

**Correction:** Carry $0.0083232$ exactly and prove the sharper arcsine bound directly; both cap comparisons retain slack.

## finding-original-ramanujan-cutoff-translation · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 29, paragraph after Table 1 (PDF p. 29).

> which translates to

The stated $d=85730$ translation does not follow from $\alpha\le0.0068$ alone. At that degree, $4(d-1)/d^2>0.0068^2$. The degree conclusion can instead be checked directly in the regular specialization of (1.3).

The rendered source explicitly links the decimal threshold to this degree. The mismatch is in the arithmetic translation, not a demonstrated failure of synchrony.

**Correction:** Use the direct criterion, or the integer cutoff $d\ge86505$ implied by $0.0068$.

## finding-original-symmetric-even-moments · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 31, paragraph before (6.1) (PDF p. 31).

> then all even moments would vanish

The symmetry sentence should refer to odd moments. A symmetric centered distribution generally has nonzero even moments.

This exact word appears in the original paragraph, independently of any draft transcription; the later symmetrization paragraph correctly mentions odd moments.

**Correction:** Replace “even” by “odd” for existing moments.

**Counterexample:** Let $B,B^\prime$ be independent Bernoulli$(1/2)$ variables and $W=B-B^\prime$.

The law is symmetric: probabilities at $-1,0,1$ are $1/4,1/2,1/4$. It is bounded and centered, so all moments exist. Yet $\mathbb EW^2=1/2$, contradicting the printed even-moment conclusion.

## finding-original-sparse-constant-two-edge · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 31, (6.1) and inferred $\alpha$; p. 32, Corollary 6.1 (PDF p. 31).

> best result is due to

The constant-two adjacency bound fails in part of the stated near-connectivity regime. Independent critical sparse-graph eigenvalue estimates yield an outlier gap at $p=3\log n/(2n)$, contradicting the article’s constant-two tolerance in that regime.

The original p. 31 estimate is immediately used in the $\gamma\log n/n$ regime, and Corollary 6.1 imposes the same constant-two adjacency tolerance. The independent theorem applies to exactly the original loop-free graph law.

**Correction:** Use a sparse-law estimate with an appropriate constant; separate that repair from the synchronization conclusion.

**Counterexample:** Let $d_n=(3/2)\log n$, $p_n=d_n/n$, $g=9/(2\sqrt5)-2>0$.

These are the original loop-free independent-edge graphs, with fixed $\gamma=3/2>1$ and $0<p_n<1$ eventually. In Alt–Ducatez–Knowles, Corollary 2.4(i), take $\kappa=\theta=1/10$, so $a=2/5$ and $(\log n)^{5/6}\le d_n\le n/2$ eventually. The deterministic degree root $\beta_1$ solves $d_n I(\beta_1)+\frac12\log(2\pi\beta_1d_n)=\log n$. Since $I(9/4)<5/8$, its left side is increasing for $\beta\ge1$ and at $9/4$ is at most $(15/16+o(1))\log n$, hence $\beta_1>9/4$ and index 1 is admissible, including $1\le n/(C\sqrt{d_n})$ eventually for the fixed source constant. Here $I(t)=t\log t-t+1$ and $I(9/4)<5/8$ follows from $\log(9/4)<5/6$, since the exponential series gives $e^{5/6}>9/4$. The source theorem gives $-\lambda_{\min}(A)\ge(2+g-o(1))\sqrt{d_n}$ with probability tending to one. Subtracting PSD $p_nJ$ cannot increase the least eigenvalue, so $\|A-p_nJ\|\ge(2+g/2)\sqrt{d_n}$ eventually with high probability. This contradicts (6.1). It also contradicts Corollary 6.1 at its fixed $\varepsilon=10^{-3}<g/2$, since $p_n\ge(1+\varepsilon)\log n/n$. The synchronization conclusion is not tested by this example.

## finding-original-symmetrization-centering · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 33, first display in Proposition 6.3 proof (PDF p. 33).

> From Jensen’s inequality

The independent-copy display centers at the wrong mean. For the loop-free model, $\mathbb E(A-pJ)=-pI$, so its first equality and resulting comparison need a diagonal correction.

Section 6 uses the loop-free model; p. 6 sets $d^*=pn$. The equality in the authors’ display consequently subtracts a nonzero mean.

**Correction:** Apply Jensen at $\mathbb EA=p(J-I)$; for the stated centering add $p$.

**Counterexample:** For every $n\ge2$, set $p=1-1/[4n(n-1)]$.

The original proposition permits every $0<p<1$, including this sequence above every cutoff. Every diagonal entry of $A-pJ$ equals $-p$, giving $\mathbb E\|A-pJ\|\ge p$. For $W=A-A^\prime$, the sum of absolute entries bounds its norm and has expectation $2n(n-1)p(1-p)=p/2$. Thus the printed comparison $\mathbb E\|A-pJ\|\le\mathbb E\|W\|$ is false.

## finding-original-zeroth-even-moment · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 33, even-moment formula in Proposition 6.3 proof (PDF p. 33).

> can be easily computed

The even-moment formula includes an invalid zeroth moment. The formula $\mathbb EW_{xy}^{2\ell}=2p(1-p)$ is printed for $\ell\ge0$ rather than $\ell\ge1$.

The rendered original formula explicitly includes $\ell=0$; this is an endpoint correction, not a defect in the positive-moment calculation.

**Correction:** Separate the zeroth moment, equal to one.

**Counterexample:** $p=1/2$, $x\ne y$, $\ell=0$, any sufficiently large $n$.

Independent Bernoulli copies satisfy every graph-law hypothesis. The zeroth power is the constant one, of expectation 1; the displayed right side is $1/2$. Positive even moments are correctly computed.

## finding-original-even-walk-comparison · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 34, first trace-moment display (PDF p. 34).

> the set of even cycles

The even-walk comparison has its inequality reversed. With $q=2p(1-p)<1$, a walk using at most $\ell$ distinct edges contributes $q^m\ge q^\ell$, not at most $q^\ell$.

The rendered original display explicitly replaces the distinct-edge exponent by $\ell$ with an upper inequality; this is not an extraction error.

**Correction:** Use an applicable sparse-moment theorem or a different valid comparison.

**Counterexample:** Take $p=1/2$ and $\ell=2$ for any $n\ge2$, arbitrarily large.

Here $q=1/2$. Every alternating length-four closed walk over one edge has expectation $q$, whereas the proposed upper bound assigns $q^2$. Every nonzero even length-four walk has one or two distinct edges, so all actual terms are at least the proposed terms and the one-edge terms are strictly larger. Hence $\mathbb E\operatorname{Tr}W^4>q^2|\mathcal C_4|$. The independent-copy graph law and integer-moment hypotheses all hold.

## finding-original-uniform-expected-norm · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF pp. 33–34, Proposition 6.3 and Remark 6.4 (PDF p. 33).

> every p

Proposition 6.3 is false with its uniform all-$p$ quantifier. Both the diagonal term near $p=1$ and sparse degree spikes violate the bound. Remark 6.4’s proposed cutoffs inherit this failure; its scalar evaluations do not repair it.

The original proposition explicitly quantifies over every $p\in(0,1)$ after choosing a cutoff depending only on $C$. The two counterexamples address that exact order of quantifiers.

**Correction:** State and prove a density-dependent estimate including the diagonal contribution and sparse-degree effect.

**Counterexample:** Fix any $C>2\sqrt2$ and set $p=1-1/(16C^2n)$ for arbitrarily large $n\ge2$.

All original quantifiers are met. Every outcome has $\|A-pJ\|\ge p>1/2$ from its diagonal, while $C\sqrt{np(1-p)}=\sqrt p/4<1/4$. Thus no $n_0(C)$ works.

**Counterexample:** Use the explicit sparse family $p_k=1/n_k$ and $k>(1+5C/4)^2$.

For integer $k\ge1$, set $n_k=4^{k+2}k!$, $p_k=1/n_k$, split vertices into equal halves, and count cross-degrees $D_u$ from the first half. These are independent Bin$(n_k/2,1/n_k)$ variables because they use disjoint edge coordinates. For $n_k\ge4k$, $\mathbb P(D_u=k)\ge1/(2\,4^k k!)$: each falling-factorial factor is at least $n_k/4$, and $(1-1/n_k)^{n_k/2-k}\ge1/2$. Therefore the number of independent trials times this lower bound is 4, and $\mathbb P(\max D_u\ge k)\ge4/5$, using $(1-q)^m\le(1+mq)^{-1}$. A degree-$k$ column gives $\|A\|\ge\sqrt k$, and $\|J/n_k\|=1$, hence $\|A-J/n_k\|\ge\sqrt k-1$ on that event. These are exactly the original loop-free graphs, all $p_k\in(0,1)$, and $n_k\to\infty$. Nonnegativity yields $\mathbb E\|A-p_kJ\|\ge(4/5)(\sqrt k-1)>C$, whereas $C\sqrt{n_kp_k(1-p_k)}<C$.

## finding-original-edge-coordinate-lipschitz · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 35, proof of Corollary 6.6 (PDF p. 35).

> convex and 1-Lipschitz

The edge-coordinate norm map is not 1-Lipschitz in the Euclidean metric. Its sharp cube constant is $\sqrt{2(n-1)/n}>1$ for $n\ge3$. Convexity is unaffected.

The authors apply Euclidean product concentration to the independent upper-triangular coordinates and explicitly claim the unit constant there.

**Correction:** Use an admissible Lipschitz constant and rederive any concentration application.

**Counterexample:** Take $n=1000$, $p=1/4$, $x_{ij}=p$, $y_{ij}=p-s$ for all $i<j$, with $s=1/8$.

Both vectors belong to the exact independent-coordinate cube. Zero-diagonal symmetric assembly gives $T(x)-pJ=-pI$, while $T(y)-pJ=-(p-s)I-sJ$. Thus $f(x)=p$, $f(y)=p+(n-1)s$ and $\|x-y\|_2=s\sqrt{n(n-1)/2}$. Their quotient is $\sqrt{2(n-1)/n}>1$, disproving the printed Lipschitz assertion. The corollary’s $n,p$ assumptions hold; Theorem 6.5 requires the function property on the entire cube.

## finding-original-uniform-median-bound · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 35, median bound in proof of Corollary 6.6 (PDF p. 35).

> Together with Proposition 6.3

The all-$p$ median bound used in the proof is false. Sparse degree spikes force every median above the printed upper bound.

The rendered p. 35 proof explicitly claims this median bound for $n\ge1000$, with no density qualification.

**Correction:** Replace the invalid expected-norm input and reprove a density-qualified median estimate.

**Counterexample:** Set $k=100$, $n=4^{102}100!$, $p=1/n$.

For integer $k\ge1$, set $n_k=4^{k+2}k!$, $p_k=1/n_k$, split vertices into equal halves, and count cross-degrees $D_u$ from the first half. These are independent Bin$(n_k/2,1/n_k)$ variables because they use disjoint edge coordinates. For $n_k\ge4k$, $\mathbb P(D_u=k)\ge1/(2\,4^k k!)$: each falling-factorial factor is at least $n_k/4$, and $(1-1/n_k)^{n_k/2-k}\ge1/2$. Therefore the number of independent trials times this lower bound is 4, and $\mathbb P(\max D_u\ge k)\ge4/5$, using $(1-q)^m\le(1+mq)^{-1}$. A degree-$k$ column gives $\|A\|\ge\sqrt k$, and $\|J/n_k\|=1$, hence $\|A-J/n_k\|\ge\sqrt k-1$ on that event. These are exactly the original loop-free graphs, all $p_k\in(0,1)$, and $n_k\to\infty$. Here $n\ge1000$, and with probability at least $4/5$, $Z=\|A-pJ\|\ge9$. For every $m<9$, $\mathbb P(Z\le m)\le1/5<1/2$, so every median is at least 9. The claimed bound is $4\sqrt{1-1/n}+4<8$.

## finding-original-corollary-six-five-tail · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 35, Corollary 6.6, (6.5) (PDF p. 35).

> the adjacency matrix A of G(n, p)

The all-$p$ tail estimate (6.5) fails. The sparse family supplies a fixed positive lower tail probability exceeding the asserted exponential upper bound.

Equation (6.5) is asserted for every $p\in(0,1)$; the example tests its exact centering, threshold and tail probability.

**Correction:** Replace (6.5) with an independently proved, density-qualified statement.

**Counterexample:** $k=144$, $n=4^{146}144!$, $p=1/n$, $t=3$.

For integer $k\ge1$, set $n_k=4^{k+2}k!$, $p_k=1/n_k$, split vertices into equal halves, and count cross-degrees $D_u$ from the first half. These are independent Bin$(n_k/2,1/n_k)$ variables because they use disjoint edge coordinates. For $n_k\ge4k$, $\mathbb P(D_u=k)\ge1/(2\,4^k k!)$: each falling-factorial factor is at least $n_k/4$, and $(1-1/n_k)^{n_k/2-k}\ge1/2$. Therefore the number of independent trials times this lower bound is 4, and $\mathbb P(\max D_u\ge k)\ge4/5$, using $(1-q)^m\le(1+mq)^{-1}$. A degree-$k$ column gives $\|A\|\ge\sqrt k$, and $\|J/n_k\|=1$, hence $\|A-J/n_k\|\ge\sqrt k-1$ on that event. These are exactly the original loop-free graphs, all $p_k\in(0,1)$, and $n_k\to\infty$. All original hypotheses hold, including $n\ge1000$ and $t>0$. With probability at least $4/5$, the norm is at least 11. The threshold $4\sqrt{1-1/n}+7$ is strictly below 11, so the left side is at least $4/5$. The asserted right side is $2e^{-9/4}\le8/13<4/5$.

## finding-original-corollary-six-six-small-gamma · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 35, Corollary 6.6, (6.6) (PDF p. 35).

> Moreover, for every

The logarithmic-density estimate is false for unrestricted $\gamma>0$. A single fixed sufficiently small $\gamma$ violates it above every proposed size cutoff. This does not test the separate $\gamma>1$ application.

The original statement uses every positive $\gamma$, not only the supercritical range subsequently needed. The graph law and norm convention agree exactly.

**Correction:** Restrict the parameter range only with an independent proof.

**Counterexample:** Fix $\gamma=10^{-6}$; let $n$ range through even integers with $L=\log n\ge2{,}000{,}000$, $p=\gamma L/n$, $k=\lceil L/1000\rceil$.

These satisfy $0<p<1/2$, $n\ge1000$ and the exact fixed-$\gamma$ law. For $M=n/2$ independent cross-degrees, $q=\mathbb P(\mathrm{Bin}(M,p)=k)\ge(Mp/k)^k e^{-2Mp}\ge e^{-L/50}$, since $L/1000\le k\le L/500\le M$, $Mp/k\ge1/4000$ and $\log4000<9$. Thus some cross-degree equals $k$ with probability at least $1/(1+2e^{-49L/50})>1/2$. Its centered column has squared norm $D(1-p)^2+(n-D)p^2$, so the norm is at least $(1/2)\sqrt{L/1000}>8\sqrt{\gamma L}$. The asserted upper probability is $2e^{-\gamma L}\le2e^{-2}<2/5$. Letting even $n$ increase defeats any $n_0(\gamma)$.

## finding-original-shifted-expander-probability · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF pp. 36–38, Proposition 6.9, (6.7)–(6.9) and final failure estimate (PDF p. 36).

> Then the probability

Proposition 6.9’s shifted-root expander event need not have high probability. Its degree-tail thresholds point away from (6.9). At a permitted fixed parameter pair the entire expander event instead has probability tending to zero.

The original p. 36 equations shift inward by $\varepsilon$; the original p. 37 degree target requires the opposite slack. The counterexample tests the whole p. 8 expander predicate, not merely the sufficient degree criterion.

**Correction:** Rechoose slack roots and prove their degree and spectral estimates independently.

**Counterexample:** Fix $\gamma=2$, $\varepsilon=1/2$, $L=\log n$, $p=2L/n$, $\mu=2L$, $\alpha=8/\sqrt\mu$, with exactly the printed shifted roots.

The parameter condition is $3/2<2<5$; $0<p<1$ eventually. The lower root obeys $1+c^--1/2>0$, hence $c^->-1/2$. Testing $\Delta_L\succeq c^-\mu I$ on a coordinate vector forces $d(v)\ge(1+c^-)\mu-p>L$ eventually. The sufficient degree target (6.9) also forces this. Put $k=\lfloor L\rfloor$, $a=\mathbb P(\mathrm{Bin}(n-2,p)\le k)$; the exact binomial atom and $k!\le e k(k/e)^k$ give $a\ge e^{-4}n^{-1/2}/L$ eventually. If $X$ counts vertices of full degree at most $k$ and $b=\mathbb P(\mathrm{Bin}(n-2,p)\le k-1)$, then $r=\mathbb P(d(v)\le k)=(1-p)a+pb\ge(1-p)a$. Shared-edge conditioning gives joint probability $(1-p)a^2+pb^2\le a^2$. Consequently $\mathbb P(X=0)\le1/(nr)+2p/(1-p)^2\le2e^4L/\sqrt n+2p/(1-p)^2\to0$. The full expander probability is at most this quantity; the claimed lower bound tends to one. Its failure probability, and that of (6.9), therefore tend to one.

## finding-original-upper-degree-prefactor · confirmed

**Tags:** over strong conclusions; typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 38, upper-degree probability display in Proposition 6.9 proof (PDF p. 38).

> We do the same for the maximum degree

The printed upper-tail prefactor can be negative. The threshold uses $c^++\varepsilon$, while the display substitutes $c^+-\varepsilon$.

The original rendered p. 38 formula has minus signs in this prefactor although $k^+$ was defined with plus signs on p. 37.

**Correction:** Use $(1+c^++\varepsilon)/(c^++\varepsilon)$. This does not fix the separate degree-target implication.

**Counterexample:** Take $\varepsilon=4/5$, $\gamma=11/5$ and the original positive shifted root.

The hypotheses hold: $1.8<2.2<2.5625$. For $h(x)=(1+x)\log(1+x)-x$, direct logarithm estimates give $h(4/5)<9/11<h(8/5)$. Strict increase on positive $x$ and $h(c^++4/5)=9/11$ imply $0<c^+<4/5$. Thus the printed prefactor $(1+c^+-\varepsilon)/(c^+-\varepsilon)$ is negative. For all sufficiently large $n$, $0<k^+<n-1$ and $0<p<1$, so the degree-tail probability is strictly positive, while the printed right side is negative. The other branch also exists with $c^-<0$: $h(-4/5)<9/11<1=h(-1^+)$ gives its shifted argument in $(-1,-4/5)$ and hence $c^-\in(-1/5,0)$.

## finding-original-exact-root-expansion-rate · confirmed

**Tags:** over strong conclusions

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 33, Theorem 6.2 and (6.3); p. 38 proof (PDF p. 33).

> Then G(n, p)

The exact unshifted-root expansion event does not have the claimed polynomial failure rate. Its boundary-degree obstruction has probability of order at least $1/\sqrt{\log n}$. This differs from Proposition 6.9’s shifted-root failure and does not refute synchronization.

Theorem 6.2 uses the unshifted equation (6.3) exactly; the example independently tests those roots and the full Loewner lower bound. It is not an inference from the shifted-root counterexample.

**Correction:** Use outward slack in the Laplacian parameters; prove the synchrony probability separately.

**Counterexample:** Fix $\gamma=2$, $\varepsilon=1/2$, $p=2\log n/n$, $\mu=2\log n$. Let $a=1+c^-\in(0,1)$ solve $2(a\log a-a+1)=1$, and set $k=\lceil a\mu-p\rceil-1$.

The original parameter restrictions hold, and $p\in(0,1)$ eventually. A degree-$k$ vertex violates the necessary diagonal condition $d(v)\ge a\mu-p$ for $\Delta_L\succeq c^-\mu I$. For $q=\mathbb P(\mathrm{Bin}(n-1,p)=k)$, Stirling’s two-sided bounds and $k=a\mu+O(1)$ give $q=\Theta(1/(n\sqrt{\log n}))$: the exponent is $-\mu I(a)=-\log n$, with bounded rounding error and prefactor $\Theta(\mu^{-1/2})$. For two vertex events, write $r=\mathbb P(\mathrm{Bin}(n-2,p)=k-1)/\mathbb P(\mathrm{Bin}(n-2,p)=k)=k(1-p)/((n-1-k)p)\to a$. Their joint probability divided by $q^2$ is $1+p(1-p)(r-1)^2/(1-p+pr)^2\to1$. The first two inclusion–exclusion terms yield occurrence probability at least $nq/2\ge\kappa/\sqrt{\log n}$ eventually. This exceeds $C(\log n)^4n^{-1/2}$ for every fixed $C$.

## finding-original-spectral-normalization-typo · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 37, first line of Proposition 6.9 proof (PDF p. 37).

> By Corollary 6.6

The cited spectral event is missing its degree scale. Corollary 6.6 supplies $\|\Delta_A\|\le\alpha d^*=8\sqrt{\gamma\log n}$ in the applicable range, not $\|\Delta_A\|\le\alpha$.

The original line and Definition 1.9 use different normalizations; the chosen value of $\alpha$ makes the missing factor explicit.

**Correction:** Insert $d^*$; this only corrects the normalization.

## finding-original-gaussian-variable-parity-typo · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 34, Gaussian-comparison paragraph between the two trace displays (PDF p. 34).

> On the other hand, if G is a symmetric matrix

The Gaussian comparison sentence uses the wrong variable and omits the even-power restriction. The printed $\mathbb EW_{xy}^k\ge1$ fails for the defined Bernoulli difference. Replacing $W$ by $G$ still requires even $k$.

The PDF image prints W in the Gaussian paragraph. The following trace lower bound is justified using even Gaussian moments on even walks; this correction does not repair the separate reversed Bernoulli comparison.

**Correction:** Use $\mathbb EG_{xy}^{2j}=(2j-1)!!\ge1$ for positive integers $j$; odd Gaussian moments vanish.

**Counterexample:** Use $p=1/2$, $x\ne y$, $k=2$, and any arbitrarily large $n\ge2$.

These obey Proposition 6.3 and its independent-copy graph law. The defined $W=A-A^\prime$ has probabilities $1/4,1/2,1/4$ at $-1,0,1$, so $\mathbb EW_{xy}^2=1/2<1$. For a standard Gaussian the odd moment at $k=1$ is zero by symmetry. Thus both the variable and parity corrections are needed; the even-walk Gaussian trace lower bound remains valid.

## finding-original-rounding-logarithm-typo · confirmed

**Tags:** typos

https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf; PDF p. 37, final line of the rounding paragraph, immediately before Lemma 6.7 is applied (PDF p. 37).

> as |Lk −Lk+η| ⩽|η| log log n + log(k + 1).

The rounding explanation bounds a difference of L-values instead of their logarithms. With $L_k=(\log n)^k/k!$, the preceding exponent contains $\log L_k$. The printed bound for $|L_k-L_{k+\eta}|$ is false.

The rendered formula omits both logarithms despite explicitly bounding exponent variation. The logarithmic correction supplies the intended type of estimate, without validating the separate degree-target inference.

**Correction:** For adjacent integer indices use $|\log L_k-\log L_{k+\eta}|$; handle fractional rounding by a mean-value bound on the smooth exponent.

**Counterexample:** Take the permitted $\gamma=2$, $\varepsilon=1/2$, its printed lower shifted root, $\delta=2(1+c^--1/2)$, $k=\lfloor\delta\log n\rfloor$, and the adjacent-index test $\eta=1$.

The parameter restrictions $0<1/2<1$ and $3/2<2<5$ hold. The root has $-1/2<c^-<0$, hence $0<\delta<1$ and eventually $1\le k<k+1\le n-1$, $0<p=2\log n/n<1$. Put $L=\log n$. Exactly $L_{k+1}/L_k=L/(k+1)\to1/\delta>1$. Also $k!\le k^k$ gives $L_k\ge(L/k)^k\ge\delta^{-k}\ge\delta n^{\delta\log(1/\delta)}$. Thus $|L_{k+1}-L_k|$ grows at least as a positive power of n, exceeding the printed $O(\log L)$ right side. This tests the printed unit-index inequality, not the probability conclusion. The correct logarithmic identity is $\log L_{k+1}-\log L_k=\log\log n-\log(k+1)$.
