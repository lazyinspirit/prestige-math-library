# A countably scheduled exterior collar at the actual punctured-sphere input

New source-first supplier. All previously adopted compact-collar, PL, union and cap bodies remain frozen. This construction does not supply the exceptional-point chart or complete the original E1 theorem.

## 1. Literal scope and source extent

Let X be a closed subspace of a displayed R5, and a metrizable TOP5 manifold with boundary B. Assume B is closed in X and each b in B has an actual one-sided closed local collar: an embedding h:closure(U)×[0,1]→X with h(x,0)=x, h inverse(B)=closure(U)×{0}, and h(U×[0,1)) open in X. All local data can be shrunk inside arbitrarily small ambient neighborhoods. This last property follows directly by restricting an actual boundary half-chart. The boundary may be noncompact. Countable choice (CC) is permitted.

Then there is an embedding c:B×[0,1]→X with c(b,0)=b and c(B×[0,1)) open in X. No initial global subcollar is prescribed. No extension at an omitted ambient point is asserted. In the actual use X=closure(G)\{p} is closed in S5\{p}≈R5 and B=Sigma\{p}; local flatness away from p supplies exactly these half-charts.

Source: Robert Connelly, *A new proof of Brown's collaring theorem*, Proc. AMS 27 (1971), 180–182, DOI 10.1090/S0002-9939-1971-0267588-7. Durable primary: `annular-primary/connelly1971-collaring.pdf`, with text alongside. All three printed pages were read in extracted text during the preceding new-source review; printed 181, including Remark 1, was now inspected as a rendered image. Remark 1 says a star-finite refinement allows ordering so every point has a neighborhood moving finitely often. It does not give the ordering or quantitative support argument. Sections 2–5 below supply them explicitly at this actual metric input. This is not an assertion that arbitrary locally finite supported homeomorphisms have a convergent infinite composition.

## 2. Actual countable compact patches, cutoffs, and fixed supports

Use rho(x)=|x| in the displayed R5. The compact sets

C_m = B intersect {m≤rho≤m+1}, m=0,1,2,...,

cover B. For b in C_m restrict its half-chart to a local collar h on closure(U)×[0,1] whose entire image lies in {m−2<rho<m+3}. Choose metric balls V,W in B with closure(V) inside W and closure(W) inside U, also with closure(U) compact. These choices are possible inside the half-chart: first restrict the base near b and then the collar height so its compact product stays in the specified open ambient shell. Here and below “inside” in a nesting statement permits equality only for the harmless case where the outer set is all of B.

The collection of ALL such tuples (V,W,U,h) covers C_m by its V's. Compactness supplies a finite covering list for each m. CC selects one finite list for each m; there is no recursive dependent choice of successive geometric repairs. Flatten these countably many finite lists in their (m,position) order, giving patches indexed by an at most countable subset of N. Empty C_m have the empty list.

For each selected patch use the metric on B to define

lambda_i(x)=d(x,B\W_i)/(d(x,closure(V_i))+d(x,B\W_i)).

The disjoint closed sets give a positive denominator. If closure(V_i) is empty use zero; if B\W_i is empty use one. The function is continuous, equals one on closure(V_i), and has support contained in closure(W_i) inside U_i. Thus the V_i cover B and these are actual explicitly supplied cutoffs; normal Urysohn separation is not being invoked.

Attach an external collar to form X_plus = X union_B (B×[-1,0]), identifying (b,0) with b. The local half-charts show this is Hausdorff, and that each h_i extends to a closed product embedding

H_i:closure(U_i)×[-1,1]→X_plus

by the attached collar on negative heights. Let K_i be its full compact image. These are FIXED ambient supports, chosen before any pushing. No later patch enlargement is allowed outside K_i. Define rho_plus on X by rho and on the attached collar by rho_plus(b,t)=rho(b); this is continuous by the quotient topology. For every patch selected from C_m its K_i lies in {m−2<rho_plus<m+3}. Hence every point has a neighborhood meeting only finitely many K_i: bound rho_plus in that neighborhood, leaving finitely many m and finitely many patches per m. The family is locally finite in ALL of X_plus, including the seam and the entire negative collar. Each compact K_i therefore meets only finitely many other K_j.

## 3. One actual graph-region push, with full support and inverse

For a continuous f:B→[-1,0] write

G_f = X union {(b,t): -1≤t≤0 and t≥f(b)} inside X_plus.

The boundary parameter of a current embedding g:X→G_f is g(b)=(b,f(b)). Initially f=0 and g is the inclusion.

For patch i put f_new=(1−lambda_i)f−lambda_i. On H_i coordinates the part of G_f is precisely f(x)≤t≤1. Map it to f_new(x)≤t≤1 using

s_x(t)=f_new(x)+(1−f_new(x))(t−f(x))/(1−f(x)).

It is a strictly increasing affine homeomorphism of the two intervals, with a jointly continuous inverse. It fixes t=1, and is the identity whenever lambda_i(x)=0. Conjugate by H_i on K_i intersect G_f and use identity elsewhere. The ceiling and lateral-boundary formulas agree. At the lower ambient boundary t=−1 any point of the domain has f=−1, hence f_new=f and the formula is also the identity there. These facts give continuous pasting and continuous inverse in the relative graph regions.

This yields an actual homeomorphism Phi_i:G_f→G_f_new. It fixes G_f outside K_i and maps K_i intersect G_f ONTO K_i intersect G_f_new. The latter support invariance is important: the move never leaves its prescribed K_i, even if its image meets another patch. On the boundary graph Phi_i sends (b,f(b)) to (b,f_new(b)). If f(b)=−1 then f_new(b)=−1, so already completed base points remain completed. The map uses the source formula itself, not an ambient extension theorem.

A finite composition over any finite index set has support in the fixed finite union of its K_i. It preserves that union setwise as a map between the corresponding graph regions: each constituent does so for its own support and fixes its complement. Its inverse has the same support bound. Each constituent's graph image still contains all of the original X, so all subsequent fixed H_j charts remain available.

## 4. Explicit three-batch ordering, without infinite trajectories

Form the graph on patch indices, joining distinct i,j exactly when K_i meets K_j. It is locally finite by Section 2. In each component choose the least index as root; no choice principle is needed for this selection. Partition its vertices into graph-distance layers L(component,d), d=0,1,.... Each layer is finite: a finite ball of radius d in a locally finite graph is finite by induction. This is a statement about uniquely defined finite sets, not a sequence of arbitrary choices. Process the indices in a finite layer in their inherited increasing order, using Section 3. Denote the compact union of its supports by K(component,d).

Color layers by d modulo 3. Two distinct layers of the same color in one component have distance levels differing by at least three; their K-unions are disjoint, since an intersecting pair of constituent supports would be a graph edge and their levels would differ by at most one. Layers in distinct components also have disjoint K-unions. Within each color the layer supports form a locally finite family: a neighborhood meeting only finitely many original K_i meets only finitely many such layer unions.

Start with f=0. For color zero, form the finite layer map for each layer of that color, each with this SAME initial f. Their supports are disjoint. Define a single global map by the appropriate finite layer map in its support and the identity outside all those supports. The locally finite closed-support family and the fixed-boundary agreement give continuity. Paste the finite layer inverses in exactly the same way; they are mutually inverse. Thus this is an actual homeomorphism of G_f onto G_f_after, not a limit of compositions. The new graph function is given locally by the finite update formulas, hence is continuous.

Repeat for colors one and two, using the current graph function as input. These are only THREE global homeomorphisms. Every patch occurs in exactly one finite layer and is processed once. Throughout the three steps the full finite-block supports stay inside their fixed K-unions, so a block in a later color cannot invalidate any of the support claims used to paste an earlier color. Completion f(b)=−1 is retained by every subsequent patch.

At every b, at least one selected V_i contains b. Its lambda_i is one, so its processing sets f(b)=−1. Consequently the final graph is f_final identically −1. Equivalently, the scalar updates satisfy f_final(b)+1=product_i(1−lambda_i(b)), a locally finite product, which vanishes at each b. The three-batch composite g is therefore a homeomorphism X→G_minus_one=X_plus. There is no assertion of pointwise convergence of an infinite forward or inverse sequence; both maps have been constructed by finitely many global steps with locally finite pasting.

## 5. The displayed collar

Define c(b,s)=g inverse(b,−1+s), 0≤s≤1. This is an embedding of B×[0,1]. At zero it equals b because g(b)=(b,−1). The set B×[-1,0) is open in X_plus, so c(B×[0,1)) is open in X. This proves the exact noncompact-boundary collar.

Already completed base points were retained by the graph invariant throughout. No claim of agreement with a preassigned positive-thickness subcollar was used or exported; the actual consumer requested none. The local finiteness and block-support arguments took place in X_plus, not merely on B, and controlled both forward and inverse maps.

## 6. Variable small thickness for the actual punctured-sphere use

The collar may be reparametrized to fit any positive continuous tolerance epsilon:B→(0,infinity) measured in any supplied ambient metric. For each b, continuity of c at (b,0) gives a neighborhood U of b and a number a in (0,1/2] such that d(c(x,t),x)<epsilon(x) for x in U and 0≤t≤a. Repeat the compact-shell selection from Section 2 for this cover, obtaining a locally finite collection of nested metric base neighborhoods and explicit cutoffs lambda_j, covering by their one-sets, together with corresponding positive a_j. CC is the only countable selection used.

Put w_j=lambda_j/(sum_l lambda_l) and eta(x)=sum_j w_j(x)a_j. Both sums are locally finite and the denominator is positive; eta is continuous and lies in (0,1/2]. At a point x all indices with positive weight have x in their valid U_j. The largest of their finitely many a_j is therefore valid at x; eta(x) is at most that largest value. It follows that d(c(x,s eta(x)),x)<epsilon(x) for every 0≤s≤1. The reparametrized map is still an embedding because the fiber rescaling (x,s)→(x,s eta(x)) is an embedding with continuous inverse s=t/eta(x).

For the consumer epsilon(x)=d(x,p) in the displayed S5 metric is positive and continuous on B. The resulting uniform smallness is exactly the requested cusp control. This is a metric control estimate for the punctured collar, not an ambient chart or extension embedding at p. No original endpoint conclusion is inferred.

## Choice and consumer boundary

The only countable selections are finite local-data lists on countably many compact shells (twice if the optional tolerance reparametrization is used), authorized by CC. The graph, least roots, distance layers, order within finite layers, metric functions, and batch pastings are explicit once those lists are fixed. In particular there is no invocation of arbitrary normal-space Urysohn separation, uncountable chart choice, or dependent ordering of geometric repairs.

This supplier is NEW and author-stage pending independent review. It consumes only the literal actual one-sided local collars and metric exterior described in Section 1. It does not reread, extend or revalidate any accepted supplier body, nor complete the Cantrell/Lacher exceptional-point chain or the original E1 statement.
