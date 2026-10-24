---
id: thm-it-sphere-packing-strict-feasibility-converse
kind: theorem
title: Sphere-packing converse above the finite-divergence threshold
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-it-reliability-function, def-it-gallager-and-expurgated-exponent-functions, lem-it-optimized-constant-composition-gallager-identity, def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, thm-it-fano-inequality, thm-it-finite-entropy-chain-rule, thm-it-finite-kl-nonnegative-equality, def-it-finite-mutual-information, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-finite-kullback-leibler-divergence, lem-it-finite-log-sum-inequality, thm-finite-jensen-inequality, lem-it-dmc-mutual-information-concave-in-input, thm-heine-cantor-metric, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-logarithm-slower-than-every-positive-power, thm-separating-hyperplane-theorem-for-disjoint-convex-sets, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: This theorem assumes the Axiom of Choice and Countable Choice exactly through the published weak-separation supplier; all finite-DMC and type-class steps are choice-free.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Define the finite-divergence auxiliary-channel set and the threshold R_infinity; establish compactness and strict feasibility for R>R_infinity.
  - Prove the constant-composition converse by Fano, a uniform Chebyshev bound, and an explicit change-of-measure inequality.
  - Pass from arbitrary codes to a type subcode and track the polynomial rate/error loss.
  - Derive the convex-duality identity only under strict feasibility and keep the AC/CC separation branch explicit.
  - Use the global constant-composition/Gallager identity, not a pointwise-in-input identity.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.4*"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 22, §22.4*, printed pp. 431–433; the standard sphere-packing exponent upper bound $E_{\\rm sp}$ and its scope. The finite-divergence threshold and strict-feasibility duality argument are proved locally in this item."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $W$ be a finite unconstrained DMC. For $P$ on $\mathcal X$, let $V$ range over row-stochastic channels satisfying $\operatorname{supp}V(\cdot\mid x)\subseteq\operatorname{supp}W(\cdot\mid x)$, and define
$$D_P(V)=\sum_xP(x)D(V(\cdot\mid x)\|W(\cdot\mid x)),\quad I_P(V)=I(X;Y)\text{ under }P(x)V(y\mid x),$$
$$J(P)=\min_V I_P(V),\qquad R_\infty(W)=\max_PJ(P).$$
For every $R>R_\infty(W)$, the limsup average- and maximal-error exponents satisfy
$$E^+_{\rm av}(R)\le E_{\rm sp}(R),\qquad E^+_{\rm max}(R)\le E_{\rm sp}(R),$$
where $E_{\rm sp}$ is defined in [[def-it-gallager-and-expurgated-exponent-functions]]. The theorem makes no endpoint assertion at $R=R_\infty(W)$.

## Facts & Assumptions

**Given:** The finite DMC, deterministic length-$n$ codes, and the two choice principles in the Statement.

[A1] [[def-axiom-of-choice]] and [[def-countable-choice]]: AC and Countable Choice are assumed only for the weak-separation application in step 3.2.

[F1] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: the DMC block law is the product of its row kernels.

[F2] [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: messages are uniform, codewords are deterministic, and average error is the average of message errors.

[F3] [[thm-it-fano-inequality]]: for a uniform $M\ge2$-message variable and any deterministic decoder with error $e$, $I(M;Y)\ge(1-e)\ln M-\ln2$.

[F4] [[thm-it-finite-entropy-chain-rule]] and [[thm-it-finite-kl-nonnegative-equality]]: finite entropy obeys the chain rule, and finite mutual information/conditional mutual information are nonnegative.

[F5] [[def-it-finite-mutual-information]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: mutual information is finite KL, and entropy is $H(p)=-\sum_{p_i>0}p_i\ln p_i$ with $0\ln0=0$.

[F6] [[lem-it-finite-log-sum-inequality]]: the finite log-sum inequality proves joint convexity of KL under linear mixing of both arguments.

[F7] [[thm-heine-cantor-metric]] and [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: continuous functions on compact metric subsets of Euclidean space are uniformly continuous and attain extrema.

[F8] [[thm-separating-hyperplane-theorem-for-disjoint-convex-sets]]: under AC and Countable Choice, disjoint nonempty convex subsets of Euclidean space admit a nonzero weak separating normal.

[F9] [[lem-it-optimized-constant-composition-gallager-identity]]: for every $\rho>0$, $\max_PE_{0,\rm cc}(\rho,P)=\max_PE_0(\rho,P)$.

[F10] [[thm-finite-jensen-inequality]]: a finite weighted average of a concave function is at most that function of the weighted average.

[F11] [[def-it-reliability-function]] and [[def-it-gallager-and-expurgated-exponent-functions]]: $E^+_{\rm av},E^+_{\rm max}$ are limsup error exponents and $E_{\rm sp}(R)=\sup_{\rho\ge0}(\max_PE_0(\rho,P)-\rho R)$.

[F12] [[thm-logarithm-slower-than-every-positive-power]]: $t\ln t\to0$ as $t\downarrow0$, and $\ln(n+1)/n\to0$.

[F13] [[lem-it-dmc-mutual-information-concave-in-input]]: for every finite channel $V$, $P\mapsto I_P(V)$ is concave, including on the boundary of the input simplex.

## Proof

1.1 The allowed $V$ form a compact product of row simplexes. For fixed $P$, $I_P(V)$ and $D_P(V)$ are continuous in $V$: finite sums use $t\ln t\to0$ at zero by [F12], and every denominator $W(y\mid x)$ charged by $V$ is a fixed positive transition. Thus $J(P)=\min_V I_P(V)$ exists. The joint map $(P,V)\mapsto I_P(V)$ is continuous on the compact product of the input simplex and the allowed-channel set; [F7] makes it uniformly continuous. Therefore $|J(P)-J(P')|\le\sup_V|I_P(V)-I_{P'}(V)|\to0$ as $P'\to P$. The continuous $J$ attains its finite maximum $R_\infty$ by [F7]. Since finite mutual information is nonnegative by [F4], $J(P)\ge0$ and $R_\infty\ge0$. Since $R>R_\infty$, for every $P$ its minimizing channel $V_0$ satisfies $I_P(V_0)=J(P)<R$. [F1, F4, F5, F7, F12, given]

1.2 Consider any deterministic $M\ge2$ message code whose every codeword has type $P$, and evaluate its average error $e_V$ through the product channel $V^n$. Let $U$ be its uniform message and $X^n$ its codeword. Since $X^n$ is a function of $U$ and the channel depends on $U$ only through $X^n$, $I(U;Y^n)=H(Y^n)-H(Y^n\mid U)$. The finite entropy chain rule and nonnegative conditional mutual information in [F4] give $H(Y^n)\le\sum_iH(Y_i)$. The product-channel law in [F1] gives $H(Y^n\mid U)=\sum_iH(Y_i\mid X_i)$, so $I(U;Y^n)\le\sum_iI(X_i;Y_i)=\sum_i I_{P_i}(V)$, where $P_i$ is the law of $X_i$ under the uniform message. Every codeword has type $P$, hence $n^{-1}\sum_iP_i=P$. Concavity [F13] and finite Jensen [F10] imply $I(U;Y^n)\le nI_P(V)$. Fano's inequality [F3] now yields
$$e_V\ge1-\frac{nI_P(V)+\ln2}{\ln M}.$$
The entropy formula [F5] and limit [F12] also show that $P\mapsto I_P(V)$ is continuous, as needed when types vary. [F1, F3, F4, F5, F10, F12, F13, given, algebra]

2.1 For fixed $P$, the closed feasible set $\{V:I_P(V)\le R\}$ is nonempty and compact, so $S_P(R):=\min_{I_P(V)\le R}D_P(V)$ exists. The open infimum over $I_P(V)<R$ equals this minimum: if $V^*$ minimizes the closed problem, mix it with the strict witness $V_0$ from step 1.1. Convexity of $I_P$ gives $I_P((1-t)V^*+tV_0)<R$ for $t>0$, while continuity gives $D_P((1-t)V^*+tV_0)\to S_P(R)$. For $D_P$, [F6] gives convexity row by row and then after the finite $P$-weighted sum. For $I_P$, write it as $D(PV_{XY}\|P\otimes PV_Y)$; both arguments are the same convex mixtures when $V$ is mixed, so [F6] gives convexity. This proves the required convexity and continuity facts. [F5, F6, step 1.1]

2.2 For each row $x$, under $V(\cdot\mid x)$ the log ratio $\ln[V(Y\mid x)/W(Y\mid x)]$ has mean $D(V_x\|W_x)$ and variance bounded uniformly over allowed $V$: the finite set of positive $W(y\mid x)$ has a positive minimum, and $t(\ln(t/W(y\mid x)))^2$ extends continuously at $t=0$. Thus for some finite $K_W$, a codeword of type $P_n$ has log ratio $L=\ln[V^n(Y^n\mid x^n)/W^n(Y^n\mid x^n)]$ with mean $nD_{P_n}(V)$ and variance at most $nK_W$. On $L>n(D_{P_n}(V)+\eta)$, the squared centered deviation exceeds $n^2\eta^2$, so the event indicator is at most $(L-\mathbb E L)^2/(n^2\eta^2)$. Taking expectations gives $V^n\{L>n(D_{P_n}(V)+\eta)\}\le K_W/(n\eta^2)$. On its complement $W^n\ge e^{-n(D_{P_n}(V)+\eta)}V^n$; integrating over decoder error events gives $e_W\ge e^{-n(D_{P_n}(V)+\eta)}\left(e_V-\frac{K_W}{n\eta^2}\right).$ [F1, F2, step 1.2]

3.1 At each $n$, choose a code attaining the finite-block minimum average error. For any such code of size $M_n$, partition its messages into input types; there are at most $(n+1)^{|\mathcal X|}$ types. Restrict to a largest type class of size $M'_n\ge M_n/(n+1)^{|\mathcal X|}$. Reindex the retained messages and map every old decoder output outside the retained class to one fixed retained message. For each retained message this decoder cannot increase its error, so if $e_n$ is the original average error and $e'_n$ the restricted one, then $e_n\ge(M'_n/M_n)e'_n$. Since $M_n=\lceil e^{nR}\rceil$ and $R>0$ by step 1.1, $M'_n$ grows exponentially and $n^{-1}\ln M'_n\to R$ by [F12]. Along any subsequence realizing the limsup exponent, compactness gives a further subsequence of selected types $P_n\to P$. For each allowed $V$ with $I_P(V)<R$, continuity from step 1.2 makes its Fano lower bound bounded away from zero; step 2.2 then gives $\limsup -n^{-1}\ln e_n\le D_P(V)+\eta$, since the type-class factor costs only $|\mathcal X|\ln(n+1)/n$. Letting $\eta\downarrow0$ and taking the infimum over strict-feasible $V$ proves $E^+_{\rm av}(R)\le\sup_P\inf_{V:I_P(V)<R}D_P(V)=\sup_PS_P(R),$ where the equality is step 2.1. Since every code's maximal error is at least its average error, $P^*_{\rm max}(n,M_n)\ge P^*_{\rm av}(n,M_n)$ and the same upper bound holds for $E^+_{\rm max}$. [F1, F2, F3, F11, F12, step 1.1, step 1.2, step 2.1, step 2.2]

3.2 Fix $P$. Form the upper image $G=\{(a,b):a\ge I_P(V),\ b\ge D_P(V)\text{ for some allowed }V\}$ and the open convex set $O=(-\infty,R)\times(-\infty,S_P(R))$. They are nonempty convex sets. If a point lay in both, its witnessing $V$ would satisfy $I_P(V)<R$ and $D_P(V)<S_P(R)$, contradicting the definition of the closed minimum; hence they are disjoint. Convexity of $G$ follows from step 2.1. Apply [F8] under [A1] to obtain a nonzero normal separating $G$ from $O$. Because $G$ is upper in each coordinate, the separating normal in the orientation $a\cdot g\le a\cdot o$ must have nonpositive coordinates (otherwise increasing that coordinate of $g$ violates separation). Reversing its sign gives weights $u,v\ge0$, not both zero, with $uI_P(V)+vD_P(V)\ge uR+vS_P(R)\quad\text{for every allowed }V.$ Strict feasibility from step 1.1 forces $v>0$: if $v=0$, then $u>0$ and the inequality contradicts $I_P(V_0)<R$. Normalize $v=1$ and put $\rho=u/v\ge0$. [A1, F8, step 1.1, step 2.1, algebra]

4.1 The separator gives $\inf_V\{D_P(V)+\rho I_P(V)\}-\rho R\ge S_P(R)$. Conversely, a minimizer $V^*$ of the closed problem has $I_P(V^*)\le R$ and $D_P(V^*)=S_P(R)$, so for every $\rho\ge0$, $\inf_V\{D_P(V)+\rho I_P(V)\}-\rho R\le S_P(R).$ Thus strict feasibility proves the exact dual identity $S_P(R)=\sup_{\rho\ge0}\left\{E_{0,\rm cc}(\rho,P)-\rho R\right\},$ with $E_{0,\rm cc}(0,P)=0$. [step 2.1, step 3.2, algebra]

5.1 Taking suprema over $P$ and $\rho$ in step 4.1, interchanging two suprema, and applying [F9] for $\rho>0$ (at $\rho=0$ both optimized quantities are zero) gives $\sup_PS_P(R)=\sup_{\rho\ge0}\{\max_PE_0(\rho,P)-\rho R\}=E_{\rm sp}(R).$ Combining with step 3.1 proves both stated converses. The strict condition $R>R_\infty$ was used in steps 1.1, 2.1, and 4.1; no endpoint conclusion follows from this proof. [F9, F11, step 2.1, step 3.1, step 4.1, cases] ∎
