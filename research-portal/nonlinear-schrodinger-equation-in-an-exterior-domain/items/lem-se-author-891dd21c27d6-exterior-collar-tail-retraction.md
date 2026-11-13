---
id: lem-se-author-891dd21c27d6-exterior-collar-tail-retraction
kind: lemma
domain: mathematics
title: A common exterior extension and explicit collar–tail retraction
status: draft
deps:
  - math:def-axiom-of-choice
  - lem-se-author-891dd21c27d6-bounded-common-endpoint-extension
  - lem-se-author-891dd21c27d6-whole-space-er-interpolation
  - lem-se-author-891dd21c27d6-quotient-interpolation-retraction
  - math:lem-test-function-cutoffs-and-euclidean-localization
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:lem-compact-support-zero-extension-in-wkp
  - lem-se-author-ccbb64dfef2c-strip-model-well-defined
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
  - math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-se-author-891dd21c27d6-bounded-common-endpoint-extension: mathematical-premise
  lem-se-author-891dd21c27d6-whole-space-er-interpolation: mathematical-premise
  lem-se-author-891dd21c27d6-quotient-interpolation-retraction: mathematical-premise
  math:lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  math:lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  math:lem-compact-support-zero-extension-in-wkp: mathematical-premise
  lem-se-author-ccbb64dfef2c-strip-model-well-defined: mathematical-premise
  math:def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  math:cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
formulation_deps:
  - math:def-axiom-of-choice
  - lem-se-author-891dd21c27d6-bounded-common-endpoint-extension
  - lem-se-author-891dd21c27d6-whole-space-er-interpolation
  - lem-se-author-891dd21c27d6-quotient-interpolation-retraction
  - math:lem-test-function-cutoffs-and-euclidean-localization
  - lem-se-author-ccbb64dfef2c-strip-model-well-defined
  - math:def-wkp-zero-as-a-sobolev-closure
argument_deps:
  - math:def-axiom-of-choice
  - lem-se-author-891dd21c27d6-bounded-common-endpoint-extension
  - lem-se-author-891dd21c27d6-whole-space-er-interpolation
  - lem-se-author-891dd21c27d6-quotient-interpolation-retraction
  - math:lem-test-function-cutoffs-and-euclidean-localization
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:lem-compact-support-zero-extension-in-wkp
  - lem-se-author-ccbb64dfef2c-strip-model-well-defined
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
  - math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces
---

## Statement

Assume AC. Let $\Omega=\mathbb R^n\setminus\Theta$ have smooth compact boundary and compact complement. There is one $E_\Omega:L^2(\Omega)\to L^2(\mathbb R^n)$, bounded also on the weak $W^{2,2}$ endpoint, with $r_\Omega E_\Omega=I$. It is given by a finite smooth collar construction (boundary reflections and a compactly supported interior identity localization) plus an identity free tail. Consequently the restriction-quotient $H^s(\Omega)$ satisfies $[L^2(\Omega),H^2(\Omega)]_{s/2}=H^s(\Omega)$ with equivalent norms for $0\le s\le2$.

More explicitly choose a large $L$ with $\Theta\Subset B_{L/4}$, $\eta\in C_c^\infty(B_{L/2})$ equal to $1$ near $\Theta$, $a\in C_c^\infty(B_L)$ equal to $1$ near $\operatorname{supp}\eta$, and $\beta\in C_c^\infty(\{\eta=1\}^{\circ})$ equal to $1$ near $\Theta$; put $b=1-\beta$ and $G=\Omega\cap B_L$. Let $Z u$ be the zero extension of $(1-\eta)u$ to $\mathbb R^n$. If $V_a v$ denotes $av$ on $G$ and zero on $\Omega\setminus G$, then the same maps
$$J u=((\eta u)|_G,Zu),\qquad P(v,w)=V_a v+(bw)|_\Omega=(aE_Gv+bw)|_\Omega$$
are bounded $H^s(\Omega)\to H^s(G)\oplus H^s(\mathbb R^n)$ and back for every $0\le s\le2$, and $PJ=I$. In particular
$$\|u\|_{H^s(\Omega)}\asymp\bigl(\|\eta u\|_{H^s(G)}^2+\|Zu\|_{H^s(\mathbb R^n)}^2\bigr)^{1/2}.$$
These are ordinary restriction Sobolev spaces; no boundary condition is imposed by these maps. In addition, at the integer endpoint $P$ maps $(H^2(G)\cap H^1_0(G))\oplus H^2(\mathbb R^n)$ into $H^2(\Omega)\cap H^1_0(\Omega)$; this conditional property asserts no fractional Dirichlet-domain identification.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]; in particular its countable and dependent instances are available.

[F2] [[lem-se-author-891dd21c27d6-bounded-common-endpoint-extension]] gives one $E_G$ on the bounded smooth collar $G$, bounded at $L^2$ and weak $W^{2,2}$ endpoints, with restriction identity. We use specifically its Proof steps 1.1–4.1: the nested boundary charts may be chosen arbitrarily small before selecting a finite cover; the partition has an interior term $\rho_0$ compactly supported in $G$ and boundary terms $\rho_i$; the extension is the zero extension of $\rho_0v$ plus finitely many chart/reflection terms $E_iv$, each supported in its chosen larger ambient chart by the cutoff $\psi_i$. The same construction gives both endpoint bounds. The localization of these choices for the present $G$ is specified in step 2.1 below.

[F3] [[lem-se-author-891dd21c27d6-whole-space-er-interpolation]] gives fractional quotient bounds for any common endpoint extension and [[lem-se-author-891dd21c27d6-quotient-interpolation-retraction]] then identifies its domain interpolation norms.

[F4] [[math:lem-test-function-cutoffs-and-euclidean-localization]] supplies the separating cutoffs. [[math:lem-weak-leibniz-rule-with-a-smooth-factor]] controls every weak derivative through order two, and [[math:lem-compact-support-zero-extension-in-wkp]] supplies compact-support zero extension; for the unbounded tail and for extension across only the artificial sphere, the compact-test argument is given below.

[F5] [[lem-se-author-ccbb64dfef2c-strip-model-well-defined]] applies the same endpoint maps to admissible strip functions. Finite Hilbert-sum endpoint norms may be used; their interpolated norm is equivalent to the sum of component interpolated norms by coordinate injections, coordinate projections and paired strip functions.

[F6] For any open $D$, write $H^1_0(D)=W^{1,2}_0(D)$ for the closure of $C_c^\infty(D)$ in the weak $W^{1,2}(D)$ norm, as defined by [[math:def-wkp-zero-as-a-sobolev-closure]]. The supplier [[math:cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn|Compactly supported smooth functions are dense in $W^{k,p}(\mathbb R^n)$]] gives $C_c^\infty(\mathbb R^n)$ approximation in weak $W^{1,2}(\mathbb R^n)$, using only $k=1$, $p=2$ and complex scalars.

[F7] [[math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] identifies whole-space Fourier $H^1(\mathbb R^n)$ with weak $W^{1,2}(\mathbb R^n)$ under the regular-distribution embedding, with equivalent norms. [[math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]] gives contractive weak $W^{1,2}$ restriction to every open subset. AC supplies the Countable Choice hypotheses of these inputs. The boundary-closure argument below stays in weak first-order norms and does not assume a first-order quotient-norm comparison on $G$.

## Proof

**Goal:** Establish every assertion of the Statement under the stated hypotheses.

**Given:** The hypotheses and data in the Statement.

1.1 The compact obstacle lies strictly inside a large ball, so the stated nested cutoffs exist; choose $\beta$ supported in the open plateau of $\eta$. Thus $a\eta=\eta$ and $b(1-\eta)=1-\eta$. For a weak $W^{2,2}(\Omega)$ function, $Zu$ and the zero extensions of $D^\alpha((1-\eta)u)$, $|\alpha|\le2$, have $L^2$ norms bounded by $C\|u\|_{W^{2,2}}$. They are its actual global weak derivatives: every test $\phi\in C_c^\infty(\mathbb R^n)$ is localized away from $\Theta$ by the factor $1-\eta$ and its derivatives, so the weak product identity on $\Omega$ gives the global identity after integration. Equivalently partition its compact support into the open region where the tail is zero and the region inside $\Omega$, on which the original local identities hold. This argument is valid even though the tail itself is unbounded. Hence $Z$ is one common bounded $L^2/W^{2,2}$ map. [F4, given]

2.1 Fix the extension in F2 using the following chart choices, all independent of the input. The boundary of $G$ is the disjoint union of the obstacle boundary and $\partial B_L$. Since $a=\eta=1$ on a neighborhood of the compact obstacle, choose all larger doubled obstacle charts compactly inside that neighborhood and inside $B_L$. Since $\operatorname{supp}a\Subset B_L$ and $\operatorname{supp}\eta\Subset B_{L/2}$, choose all larger doubled artificial-sphere charts in the open complement of $\operatorname{supp}a\cup\overline B_{L/2}\cup\Theta$. At every boundary point these are open neighborhoods, so the nested chart construction of F2 fits inside them; compactness then gives finitely many inner charts covering each boundary component. Complete this cover by the interior set and choose $\rho_0,\rho_i,\psi_i$ exactly as in that construction, retaining its reflection margins. Write $I_\Theta,I_L$ for the two finite sets of boundary-chart indices and $E_0$ for zero extension from $G$. Thus $E_Gv=E_0(\rho_0v)+\sum_{i\in I_\Theta}E_iv+\sum_{i\in I_L}E_iv$. For $i\in I_L$, $\operatorname{supp}E_iv\subseteq\operatorname{supp}\psi_i$ is disjoint from $\operatorname{supp}a$, hence $aE_iv=0$ for every $L^2$ input. For $i\in I_\Theta$, $a=\eta=1$ on the whole larger chart, hence $aE_iv=E_iv$. These are support identities for the actual common endpoint construction, not properties inferred for an arbitrary right inverse. [F1, F2, F4, step 1.1, construct]

2.2 At order zero the displayed $J$ and $P$ are bounded by cutoff multiplication and restriction. At the second weak-derivative endpoint, $J_1$ is bounded by restriction and Leibniz, and $J_2=Z$ is bounded by the first step. To justify $V_a$, work on $\Omega$: near the artificial sphere the function $av$ and its derivatives vanish because $a$ has support strictly inside $B_L$. On $G$ they have the weak Leibniz derivatives. Every compact test in $\Omega$ can be partitioned between these two regions, proving the partial zero-extension identity and its norm bound. This crosses only the artificial sphere, never the obstacle boundary. The term $bw|_\Omega$ is bounded at order two since $b$ has bounded derivatives through order two. Consequently $J$ and $P$ are common endpoint maps between the ordinary domain couple and the finite product of the collar and whole-space couples. [F2, F4, step 1.1]

3.1 Define $E_\Omega u=aE_G((\eta u)|_G)+Zu$ for $u\in L^2(\Omega)$. Every factor is fixed and linear, and the collar lemma and weak Leibniz bounds give both endpoint estimates for this very formula. On $G$ its first term restricts to $a\eta u=\eta u$; on $\Omega\setminus G$ it is zero because $a$ is supported inside $B_L$. Adding $Zu$ therefore gives $r_\Omega E_\Omega u=u$. For $v=(\eta u)|_G$, step 2.1 gives the exact decomposition $aE_Gv=E_0(a\rho_0v)+\sum_{i\in I_\Theta}E_iv$. The first term is the compactly supported interior identity localization: $a\rho_0v$ is supported compactly in $G$, so its zero extension is legitimate at both endpoints. Each remaining term is an obstacle-chart reflection, with no artificial-sphere contribution. Together with $Zu$ these terms establish the claimed finite collar construction and identity free tail; in particular outside $B_L$ the extension is exactly $u$. Apply the whole-space $Er$ and quotient/retraction lemmas to this common extension. They prove the exterior fractional quotient bounds and the asserted interpolation identity without presupposing an exterior fractional-domain theorem. If the complement is empty, take $E_\Omega=I$ and the collar cutoffs zero. [F2, F3, F4, step 1.1, step 2.1, algebra]

3.2 First record the weak first-order localization bounds. For $f\in W^{1,2}(G)$ the weak product rule gives $\partial_i(af)=a\partial_i f+(\partial_i a)f$ on $G$. Since $a$ vanishes near the artificial sphere, the compact-test argument of step 2.2, now through order one, shows that $V_af\in W^{1,2}(\Omega)$ with these derivatives on $G$ and zero derivatives outside $G$. Integrating these expressions gives $\|V_af\|_{W^{1,2}(\Omega)}\le C_a\|f\|_{W^{1,2}(G)}$. For $h\in W^{1,2}(\mathbb R^n)$, all derivatives of $b$ through order one are bounded, so the same weak product rule and contractive restriction give $\|(bh)|_\Omega\|_{W^{1,2}(\Omega)}\le C_b\|h\|_{W^{1,2}(\mathbb R^n)}$. These estimates require no extension across the obstacle. [F4, F7, step 2.2]

4.1 For $0<s<2$ apply the strip-map theorem to these same $J,P$. The domain interpolation couples are the quotient $H^s$ spaces by the preceding step and the quotient lemma. For the product target, each coordinate projection and injection is bounded at both endpoints, hence after interpolation. Conversely, given admissible component strip functions with prescribed values, their ordered pair is an admissible product strip function, and its boundary Hilbert norm is at most the sum of the two component boundary norms. Infimizing proves the product identification with equivalent Hilbert-sum norms. These observations give the asserted $J,P$ bounds on every intermediate order, consistent with their original $L^2$ formulas. The endpoint bounds are already established. [F3, F5, step 3.1, step 2.2]

5.1 For any $L^2$ input, $PJ u=a\eta u+b(1-\eta)u=u$ by the cutoff identities. This remains the identity on every $H^s$ restriction class because all maps are the same restrictions of the $L^2$ maps. The bound for $J$ is one of the inequalities in the claimed norm comparison, while $u=PJu$ and the bound for $P$ give the other. The definition imposes no trace at either boundary: the first collar component is an arbitrary ordinary Sobolev function and the auxiliary cutoffs merely localize. This completes the ordinary exterior localization/retraction. [F3, F4, F5, step 1.1, step 4.1, algebra]

6.1 If $v\in H^2(G)\cap H^1_0(G)$, its closure membership gives $v_j\in C_c^\infty(G)$ converging to $v$ in weak $W^{1,2}(G)$. Their $a$-localized partial zero extensions belong to $C_c^\infty(\Omega)$ and converge in weak $W^{1,2}(\Omega)$ to $V_av$ by step 3.2. For $w\in H^2(\mathbb R^n)$, the Fourier-weight inequality $\langle\xi\rangle\le\langle\xi\rangle^2$ gives $w\in H^1(\mathbb R^n)$, and F7 therefore gives $w\in W^{1,2}(\mathbb R^n)$. Choose $w_j\in C_c^\infty(\mathbb R^n)$ converging to $w$ in weak $W^{1,2}(\mathbb R^n)$ by F6. Then $(bw_j)|_\Omega\in C_c^\infty(\Omega)$ because $b$ vanishes on a neighborhood of the obstacle, and step 3.2 gives convergence to $(bw)|_\Omega$ in weak $W^{1,2}(\Omega)$. The sums of these approximants converge to $P(v,w)$ in that norm, proving $P(v,w)\in H^1_0(\Omega)$ by the closure definition. Its $H^2$ membership follows from the already established endpoint bound, proving the stated conditional property. The alternate displayed formula for $P$ holds because $E_Gv=v$ on $G$ and $a$ vanishes outside $B_L$, so it is the same map rather than a second extension. [F2, F3, F4, F6, F7, step 2.2, step 3.2] ∎
