---
id: lem-se-trajectory-polynomial-tame-bound
kind: lemma
domain: mathematics
title: Tame bounds for the quadratic-cubic trajectory remainder
status: published
deps:
  - lem-se-power-time-integrability
  - lem-se-exterior-h2-uniform-algebra
  - lem-se-complex-polynomial-energy-rule
  - def-se-foundation-time-function-spaces
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:lem-weak-product-rule-for-bounded-sobolev-functions
  - math:thm-meyers-serrin-density-on-an-arbitrary-open-set
  - math:lem-test-function-cutoffs-and-euclidean-localization
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:thm-sobolev-chain-rule-for-c-one-lipschitz-compositions
  - math:lem-schwartz-cutoffs-from-the-standard-smooth-step
  - math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences
  - math:thm-dominated-convergence
  - math:thm-holder-inequality-for-integrals
  - math:def-strongly-measurable-banach-valued-function
  - math:thm-bochner-integrability-criterion
  - math:thm-sobolev-spaces-are-banach-spaces
  - math:lem-closed-subspace-of-a-banach-space-is-banach
  - math:thm-lp-trace-operator-on-a-bounded-c-one-domain
  - math:thm-extension-theorem-for-bounded-smooth-domains
  - math:thm-higher-order-sobolev-embedding
  - math:def-axiom-of-choice
dependency_roles:
  lem-se-power-time-integrability: mathematical-premise
  lem-se-exterior-h2-uniform-algebra: mathematical-premise
  lem-se-complex-polynomial-energy-rule: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  math:lem-weak-product-rule-for-bounded-sobolev-functions: mathematical-premise
  math:thm-meyers-serrin-density-on-an-arbitrary-open-set: mathematical-premise
  math:lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  math:lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  math:thm-sobolev-chain-rule-for-c-one-lipschitz-compositions: mathematical-premise
  math:lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences: mathematical-premise
  math:thm-dominated-convergence: mathematical-premise
  math:thm-holder-inequality-for-integrals: mathematical-premise
  math:def-strongly-measurable-banach-valued-function: mathematical-premise
  math:thm-bochner-integrability-criterion: mathematical-premise
  math:thm-sobolev-spaces-are-banach-spaces: mathematical-premise
  math:lem-closed-subspace-of-a-banach-space-is-banach: mathematical-premise
  math:thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
  math:thm-extension-theorem-for-bounded-smooth-domains: mathematical-premise
  math:thm-higher-order-sobolev-embedding: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

Assume the Axiom of Choice ([[math:def-axiom-of-choice]]), let $T>0$ and $\lambda\in\mathbb R$, and define $F(w,z)=\lambda(2w|z|^2+\overline w z^2+|z|^2z)$. Sobolev spaces use their full weak-derivative norms ([[math:def-sobolev-space-wkp-and-its-norm]]), and $H^1_0$ is the $H^1$ closure of $C_c^\infty$ ([[math:def-wkp-zero-as-a-sobolev-closure]]). Time spaces and scalar mixed norms have the convention of [[def-se-foundation-time-function-spaces]]. In particular, the $L^4_tL^\infty_x$ representative is jointly scalar measurable and agrees with the continuous $H^1_0$ path as a spatial almost-everywhere class for almost every time; it need not be a strongly measurable $L^\infty$-valued map.

**Energy case.** On any open $\Omega\subset\mathbb R^n$, $n\ge1$, let $X_1=C([0,T];H^1_0(\Omega))\cap L^4_tL^\infty_x$, with the sum norm, and let $w\in C([0,T];W^{1,\infty}(\Omega))$. Here $W^{1,\infty}$ means an essentially bounded function with essentially bounded first weak derivatives, with norm $\|w\|_\infty+\sum_j\|D_jw\|_\infty$. Thus $w$ need not belong to $L^2(\Omega)$. Put $M_1=\sup_t\|w(t)\|_{W^{1,\infty}}$. Then $F(w,z)$ is strongly measurable and Bochner integrable into $H^1_0$ for every $z\in X_1$, and, for $d=z-q$, $$\|F(w,z)\|_{L^1_tH^1_0}\le C|\lambda|\bigl(M_1T^{3/4}\|z\|_{X_1}^2+T^{1/2}\|z\|_{X_1}^3\bigr),$$ $$\|F(w,z)-F(w,q)\|_{L^1_tH^1_0}\le C|\lambda|\bigl(M_1T^{3/4}(\|z\|_{X_1}+\|q\|_{X_1})+T^{1/2}(\|z\|_{X_1}^2+\|q\|_{X_1}^2)\bigr)\|d\|_{X_1}.$$ The cubic input is [[lem-se-power-time-integrability]]; the quadratic terms use the local bounded-coefficient weak product rule [[math:lem-weak-product-rule-for-bounded-sobolev-functions]] with the closure and measurability constructions below.

**Order-two case.** Suppose instead that $n\in\{2,3\}$ and $\Omega$ is the connected smooth compact-obstacle exterior of [[lem-se-exterior-h2-uniform-algebra]]. Put $V_2=H^2(\Omega)\cap H^1_0(\Omega)$ with its $H^2$ norm, $X_2=C([0,T];V_2)$, and let $w\in C([0,T];H^2(\Omega))$, with $M_2=\sup_t\|w(t)\|_{H^2}$. No zero trace of $w$ is required. The function $F(w,z)$ belongs to $C([0,T];V_2)$, hence to $L^1(0,T;V_2)$, and $$\|F(w,z)\|_{L^1_tV_2}\le C_\Omega|\lambda|T\bigl(M_2\|z\|_{X_2}^2+\|z\|_{X_2}^3\bigr),$$ $$\|F(w,z)-F(w,q)\|_{L^1_tV_2}\le C_\Omega|\lambda|T\bigl(M_2(\|z\|_{X_2}+\|q\|_{X_2})+\|z\|_{X_2}^2+\|q\|_{X_2}^2\bigr)\|z-q\|_{X_2}.$$ Its obstacle trace vanishes, using the trace convention and algebra of [[lem-se-exterior-h2-uniform-algebra]]. Consequently, in either case, the approved bounds $\|F(w,z)\|_{L^1_tV_s}\le C_w(\|z\|_{X_s}^2+\|z\|_{X_s}^3)$ and $\|F(w,z)-F(w,q)\|_{L^1_tV_s}\le C_w(\|z\|_{X_s}+\|q\|_{X_s}+\|z\|_{X_s}^2+\|q\|_{X_s}^2)\|z-q\|_{X_s}$ hold, where $V_1=H^1_0$ and the constant depends only on the fixed domain/dimension, $T$, $\lambda$ and the displayed coefficient norm.

## Facts & Assumptions

[F1] The authored [[lem-se-power-time-integrability]] gives cubic strong measurability and the $T^{1/2}$ energy growth/difference estimates in the scalar mixed-norm convention. The authored [[lem-se-complex-polynomial-energy-rule]] supplies its bounded complex weak-polynomial calculus and the bounded compact-approximation construction used in its zero-boundary proof. We reproduce the needed quadratic closure argument below rather than assuming a trace characterization on an arbitrary open set.

[F2] The bounded weak Sobolev product rule is [[math:lem-weak-product-rule-for-bounded-sobolev-functions]]. Smooth cutoff multiplication and its weak Leibniz formula are [[math:lem-weak-leibniz-rule-with-a-smooth-factor]]. For local calculations, compactly supported cutoffs are available by [[math:lem-test-function-cutoffs-and-euclidean-localization]], and smooth $H^1$ functions are dense on any open set by [[math:thm-meyers-serrin-density-on-an-arbitrary-open-set]]. These statements are used with their actual local or finite-$p$ hypotheses.

[F3] The $H^1$ and $H^2$ spaces are Banach ([[math:thm-sobolev-spaces-are-banach-spaces]]); closed subspaces are Banach ([[math:lem-closed-subspace-of-a-banach-space-is-banach]]). The norm and closure conventions are [[math:def-sobolev-space-wkp-and-its-norm]] and [[math:def-wkp-zero-as-a-sobolev-closure]]. Thus $H^1_0$ is Banach, and $V_2$ is Banach because $H^2\hookrightarrow H^1$ continuously and $H^1_0$ is closed in $H^1$.

[F4] There is a real smooth compactly supported cutoff $\chi$ equal to one on $[-1,1]$ ([[math:lem-schwartz-cutoffs-from-the-standard-smooth-step]]). The scalar $C^1$ chain rule with bounded derivative and a zero-fixing composition is [[math:thm-sobolev-chain-rule-for-c-one-lipschitz-compositions]]. Almost-everywhere subsequences of $L^2$ convergent sequences and scalar dominated convergence are [[math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]] and [[math:thm-dominated-convergence]].

[F5] Time Holder is [[math:thm-holder-inequality-for-integrals]]. Strong measurability means almost-everywhere approximation by finite-range measurable maps ([[math:def-strongly-measurable-banach-valued-function]]), and an integrable norm then gives Bochner integrability ([[math:thm-bochner-integrability-criterion]]). The compatible scalar mixed and continuous path conventions are [[def-se-foundation-time-function-spaces]].

[F6] The authored [[lem-se-exterior-h2-uniform-algebra]] gives the actual global exterior $H^2$ multiplication and $L^\infty$ bounds for $n=2,3$, conjugation invariance, and the obstacle-trace convention. For a sufficiently large $R$ with $\Theta\Subset B_R$, the truncation $G=\Omega\cap B_R$ has separated smooth obstacle and spherical boundary components, so is a bounded $C^2$ domain. By [[math:thm-extension-theorem-for-bounded-smooth-domains|Bounded $C^k$ domains admit integer-order Sobolev extension]] with $k=2$, $p=2$ and complex scalars, $G$ is a $W^{2,2}$-extension domain. By [[math:thm-higher-order-sobolev-embedding]], assertion (3), with $k=2$, $p=2$, $m=0$ and $\alpha=1/4$, each $H^2(G)$ class has a representative in $C^{0,1/4}(\overline G)$: indeed $4>n$ and $0<1/4<2-n/2$ for both $n=2$ and $n=3$. On $G$, the $H^1$ trace is bounded and agrees with continuous boundary values by [[math:thm-lp-trace-operator-on-a-bounded-c-one-domain]] with $p=2$. These extension, embedding and trace inputs are applied only on the bounded truncation, not asserted as global exterior theorems.

[F7] The Axiom of Choice in [[math:def-axiom-of-choice]] supplies the choice assumptions of [F1]–[F6]. All subsequent claims are mathematical consequences under those hypotheses, without any physical premises.

## Proof

**Given:** The spaces, norms, time interval, polynomial and coefficient assumptions in the two parts of the Statement.

**Goal:** Prove the quadratic-cubic bounds, actual $H^1_0$ closure, strong measurability and the order-two zero-trace application, allowing energy coefficients without global $L^2$ membership.

1.1 First, multiplication by $a\in W^{1,\infty}(\Omega)$ is bounded on $H^1$, with $\|av\|_{H^1}\le C\|a\|_{W^{1,\infty}}\|v\|_{H^1}$ and $D_j(av)=aD_jv+(D_ja)v$. To prove this without assuming $a\in L^2$, start with smooth $v\in H^1$. Around the compact support of any test function, multiply $a$ and $v$ by a compactly supported smooth cutoff equal to one there. Both localized functions are bounded $H^1$ functions on a bounded neighborhood, so [F2] gives the weak product formula on that test support. The global coefficient bounds make the displayed derivative and value square integrable, proving the asserted global norm bound. For general $v$, approximate it in $H^1$ by smooth $H^1$ functions using [F2]; the same bound makes their products Cauchy in $H^1$. Their $L^2$ limit is $av$, so completeness and the weak-derivative norm identify the same formula and bound. Also every $H^1$ function supported in a compact $K\Subset\Omega$ lies in $H^1_0$: choose $\eta\in C_c^\infty(\Omega)$ equal to one near $K$, approximate the function by smooth $H^1$ functions, and multiply those approximants by $\eta$. The weak cutoff bound gives convergence in $H^1$ to $\eta v=v$, while the approximants are in $C_c^\infty(\Omega)$. [F2, F3, F7, given]

1.2 Put $T_R(s)=s\chi(s/R)$ and $S_Rv=T_R(\operatorname{Re}v)+iT_R(\operatorname{Im}v)$ for positive integers $R$. The functions $T_R$ are smooth, fix zero and have bounded continuous derivatives. The map $S_R:H^1\to H^1$ is continuous. Indeed, along an $H^1$ convergent sequence take an almost-everywhere convergent subsequence; the derivative difference of a real component has the form $T_R'(v_k)(D_jv_k-D_jv)+(T_R'(v_k)-T_R'(v))D_jv$. The first term tends to zero in $L^2$ by its bounded coefficient, and dominated convergence gives the same for the second. The value difference is controlled by the Lipschitz bound. Applying this argument to every subsequence proves continuity of the full sequence. Since $T_R(0)=0$, its operation on $C_c^\infty$ stays in $C_c^\infty$; continuity and closure give $S_R(H^1_0)\subset H^1_0$. Each $S_Rv$ has an essential bound depending only on $R$. If $u\in H^1_0\cap L^\infty$, fix $R>\|u\|_\infty+1$ and apply $S_R$ to compactly supported smooth approximants to $u$. This produces $u_k\in C_c^\infty$, uniformly bounded in $L^\infty$, converging in $H^1$ to $u=S_Ru$ and, after a subsequence, almost everywhere. This is also the bounded approximation used in [F1]. [F1, F3, F4, F7, given]

2.1 If $u\in H^1_0\cap L^\infty$ and $v\in H^1\cap L^\infty$, then $uv\in H^1_0$. Choose $u_k$ from step 1.2. Each $u_kv$ is compactly supported and in $H^1$ by [F2], so belongs to $H^1_0$ by step 1.1. Its value converges to $uv$ in $L^2$ by $\|v\|_\infty\|u_k-u\|_2$. The derivative difference is $v(D_ju_k-D_ju)+(u_k-u)D_jv$; the first term converges in $L^2$, and the second does so by the uniform bound, almost-everywhere convergence and dominated convergence. Closure proves the claim. Conjugation preserves weak derivatives and $H^1_0$ by conjugating the test identities and approximants. Finally, any $a\in W^{1,\infty}$ preserves $H^1_0$, without being in $L^2$: for $\varphi_k\in C_c^\infty$ converging to $u\in H^1_0$, each $a\varphi_k$ is compactly supported $H^1$, and the multiplier estimate in step 1.1 gives convergence to $au$ in $H^1$. Thus all quadratic terms with the energy coefficient have zero-boundary closure. [F2, F3, F4, step 1.1, step 1.2]

2.2 For bounded $H^1$ functions define $A_u=\|u\|_\infty$ and $B_u=\|u\|_{H^1}$. The weak product formula gives $\|uv\|_{H^1}\le C(A_u B_v+A_v B_u)$. With $d=z-q$, the identities $z^2-q^2=dz+qd$ and $|z|^2-|q|^2=d\overline z+q\overline d$ therefore give, for either quadratic expression $Q$, $\|Q(z)\|_{H^1}\le C A_zB_z$ and $\|Q(z)-Q(q)\|_{H^1}\le C((A_z+A_q)B_d+(B_z+B_q)A_d)$. Apply the multiplier estimate to $2w|z|^2+\overline w z^2$ to obtain the same bounds times $CM_1$. This calculation uses only the value and first derivative bounds of $w$, not its global $L^2$ norm. The cubic term and its pointwise-in-time difference estimate are already supplied by [F1]. [F1, F2, step 1.1, algebra]

3.1 To justify energy measurability, $t\mapsto S_Rz(t)$ is continuous in $H^1_0$ by step 1.2 and is uniformly spatially bounded for fixed $R$. On uniformly bounded $H^1$ sets, the maps $v\mapsto v^2$ and $v\mapsto|v|^2$ are continuous into $H^1$: for a convergent sequence, subtract the product derivative formulas by adding the approximating coefficient times the limiting derivative; the terms with derivative differences converge by the uniform bound, and the other terms converge by an almost-everywhere subsequence and dominated convergence. The subsequence criterion gives convergence of the whole sequence. Since $w$ is norm-continuous into $W^{1,\infty}$, the two truncated quadratic expressions with $w$ are continuous $H^1_0$ paths by the multiplier bound and step 2.1. Each continuous path on a compact interval admits uniform finite-valued time-step approximations. For almost every $t$, compatibility of the scalar mixed representative gives $\|z(t)\|_\infty<\infty$, so $S_Rz(t)=z(t)$ for every sufficiently large integer $R$. Thus the quadratic expression is a pointwise almost-everywhere limit of these strongly measurable paths, and hence strongly measurable; one may choose each path's finite-valued approximant with uniform error at most $1/R$. The cubic term is strongly measurable by [F1]. Differences of the resulting maps are strongly measurable as well. No strong measurability into spatial $L^\infty$ is needed. [F1, F4, F5, step 1.2, step 2.1, step 2.2]

3.2 In the order-two setting [F6] gives $H^2\subset H^1\cap L^\infty$ and its global algebra bound. Every quadratic-cubic summand in $F$ has at least one factor $z\in H^1_0$, while every remaining factor, including $w$ and its conjugate, lies in $H^1\cap L^\infty$. Repeatedly apply step 2.1 to obtain actual $H^1_0$ membership, with no zero trace assumption on $w$. Repeated multiplication in the exterior $H^2$ algebra gives $\|F(w,z)\|_{H^2}\le C_\Omega|\lambda|(\|w\|_{H^2}\|z\|_{H^2}^2+\|z\|_{H^2}^3)$. Telescoping the factors in $z^2-q^2$, $|z|^2-|q|^2$, and $z^2\overline z-q^2\overline q$ gives the pointwise difference bound $C_\Omega|\lambda|[\|w\|_{H^2}(\|z\|_{H^2}+\|q\|_{H^2})+\|z\|_{H^2}^2+\|q\|_{H^2}^2]\|z-q\|_{H^2}$. Continuous multiplication and conjugation in this algebra show that $t\mapsto F(w(t),z(t))$ is continuous in $H^2$, and its values are in the closed subspace $V_2$, hence the path is continuous into that Banach space. [F2, F3, F6, step 2.1, algebra]

4.1 For the energy bounds write $a_z=\|\|z(t)\|_\infty\|_{L^4_t}$ and $b_z=\sup_t\|z(t)\|_{H^1}$. Holder gives $\int_0^T\|z(t)\|_\infty\,dt\le T^{3/4}a_z$. Thus step 2.2 bounds the quadratic growth by $C|\lambda|M_1T^{3/4}a_zb_z$. Its quadratic difference is bounded after integration by $C|\lambda|M_1T^{3/4}((a_z+a_q)b_d+(b_z+b_q)a_d)$. Every $a$ and $b$ is bounded by the corresponding $X_1$ norm. The $m=3$ case of [F1] supplies the remaining cubic estimates with $T^{1/2}$. These yield both displayed energy inequalities. In view of step 3.1 the norms are integrable norms of strongly measurable $H^1_0$ maps, so they are the claimed Bochner $L^1$ quantities by [F5]. [F1, F5, step 2.2, step 3.1, algebra]

4.2 Integrating the pointwise bounds in step 3.2 over the finite interval gives the order-two estimates with factor $T$. The continuous path there is strongly measurable by uniform time-step approximation and has bounded $V_2$ norm, so Bochner integrability follows from [F3] and [F5]. To identify its obstacle trace, choose $R$ with $\Theta\Subset B_R$ and let $G=\Omega\cap B_R$, the bounded smooth truncation in [F6]. Restrict any $H^1_0(\Omega)$ approximating sequence from $C_c^\infty(\Omega)$ to $G$. Each approximant has zero obstacle trace and convergence in $H^1(G)$; boundedness of the trace in [F6] gives zero obstacle trace for the limit. For any $u\in H^2(\Omega)$, restriction gives $u|_G\in H^2(G)$. Apply the bounded-domain extension theorem of [F6] with $k=p=2$ to make $G$ an $H^2$ extension domain, and then the higher-order embedding there with $m=0$, $\alpha=1/4$; its strict supercritical hypotheses hold since $0<1/4<2-n/2$. This produces a representative of $u|_G$ continuous on $\overline G$, to which the bounded $H^1(G)$ trace theorem applies and identifies the boundary values with the trace. Applying this to $u=F(w(t),z(t))\in V_2$ from step 3.2, for each $t$, proves the claimed continuous-boundary-value interpretation of its zero obstacle trace, without requiring a zero trace of $w$ or a global exterior trace theorem. [F3, F5, F6, step 3.2]

5.1 Finally, in the energy case absorb $C|\lambda|M_1T^{3/4}$ and $C|\lambda|T^{1/2}$ into $C_w$; in the order-two case absorb $C_\Omega|\lambda|T(M_2+1)$. The sharper estimates then imply exactly the two approved quadratic-cubic tame inequalities for $s=1,2$, with the stated dependence and all membership and measurability assertions proved above. This completes the proof. ∎ [step 4.1, step 4.2, algebra]
