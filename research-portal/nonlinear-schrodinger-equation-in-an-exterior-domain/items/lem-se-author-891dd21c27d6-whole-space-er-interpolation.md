---
id: lem-se-author-891dd21c27d6-whole-space-er-interpolation
kind: lemma
domain: mathematics
title: Whole-space interpolation of one extension–restriction operator
status: published
deps:
  - math:def-axiom-of-choice
  - math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
  - math:ex-unbounded-multiplication-operator-and-its-domain
  - math:thm-plancherel
  - lem-se-positive-spectral-scale-contract
  - math:thm-quotient-of-banach-by-closed-subspace-is-banach
  - math:def-sobolev-space-wkp-and-its-norm
  - math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces
  - physics:lem-nrqm-oscillator-unitary-transport-of-spectral-pvms
  - math:thm-unbounded-borel-functional-calculus
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces: mathematical-premise
  math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  math:ex-unbounded-multiplication-operator-and-its-domain: mathematical-premise
  math:thm-plancherel: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  math:thm-quotient-of-banach-by-closed-subspace-is-banach: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces: mathematical-premise
  physics:lem-nrqm-oscillator-unitary-transport-of-spectral-pvms: mathematical-premise
  math:thm-unbounded-borel-functional-calculus: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
---

## Statement

Assume AC and use complex scalars throughout. Let $n\ge1$ and let $D\subseteq\mathbb R^n$ be open, and suppose one linear $E:L^2(D)\to L^2(\mathbb R^n)$ is bounded, restricts to a bounded $W^{2,2}(D)\to W^{2,2}(\mathbb R^n)$ map, and satisfies $r_DE=I$. Define $T=E r_D$ on all of $L^2(\mathbb R^n)$. Then the same $T$ is bounded on the Fourier spaces $H^s(\mathbb R^n)$ for every $0\le s\le2$. For the restriction quotient
$$H^s(D)=r_D H^s(\mathbb R^n),\qquad \|u\|_{H^s(D)}=\inf_{r_DF=u}\|F\|_{H^s(\mathbb R^n)},$$
the existing $L^2$ map $E$ restricts to a bounded extension $H^s(D)\to H^s(\mathbb R^n)$ and $r_DE=I$ there. These quotient norms are definite and complete, and the extension value is independent of the choice of $F$. Whole-space $H^s$ here has the exact norm $\|\langle\xi\rangle^s\widehat F\|_2$, with $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]; in particular its countable and dependent instances are available.

[F2] [[math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]] gives the weighted Fourier distribution convention and exact norm; [[math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] gives only norm equivalence with weak $W^{2,2}$ at the integer endpoint.

[F3] [[math:ex-unbounded-multiplication-operator-and-its-domain]] constructs the self-adjoint real multiplication operator with its exact domain and Borel calculus on $L^2$; [[math:thm-plancherel]] transports it unitarily to physical space.

[F4] [[lem-se-positive-spectral-scale-contract]] gives isometric interpolation of positive self-adjoint Hilbert scales and the common-operator geometric-mean bound, with the stated decaying strip convention.

[F5] [[math:thm-quotient-of-banach-by-closed-subspace-is-banach]] makes the quotient by a closed kernel Banach; AC supplies its countable-choice requirement.

[F6] For an open set $U\subseteq\mathbb R^n$, $W^{2,2}(U)$ means $W^{2,2}(U;\mathbb C)$ from [[math:def-sobolev-space-wkp-and-its-norm]]: almost-everywhere classes with complex weak derivatives through order two in $L^2$, equipped with the square root of the sum of their squared $L^2$ norms. Under AC, restriction from $W^{2,2}(\mathbb R^n;\mathbb C)$ to $W^{2,2}(D;\mathbb C)$ is a contraction by [[math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]], including the empty-set case.

[F7] [[physics:lem-nrqm-oscillator-unitary-transport-of-spectral-pvms]] has domain mathematics and, under AC and its countable instance, transports a self-adjoint operator and its spectral PVM along a bijective complex-linear isometry. [[math:thm-unbounded-borel-functional-calculus]] gives the squared-integrability domains, exact norm identities and bounded-truncation limits for Borel multipliers. Together these apply to the inverse Plancherel unitary and the real multiplier $1+|\xi|^2$; no physical premise is used.

## Proof

**Goal:** Establish every assertion of the Statement under the stated hypotheses.

**Given:** The hypotheses and data in the Statement.

1.1 Use the self-adjoint multiplication operator $M_{1+|\xi|^2}$ and the Plancherel unitary to define $B=\mathcal F_2^{-1}M_{1+|\xi|^2}\mathcal F_2$ with domain $\mathcal F_2^{-1}D(M_{1+|\xi|^2})$. The transport lemma in [F7], with $U=\mathcal F_2^{-1}$, makes $B$ self-adjoint with spectral PVM $P_B(C)=\mathcal F_2^{-1}P_M(C)\mathcal F_2$. Its scalar spectral measure at $F$ is the multiplier's scalar spectral measure at $\mathcal F_2F$. The multiplication model and the calculus domain and norm identities therefore give $D(B^{s/2})=\{F\in L^2:\langle\xi\rangle^s\mathcal F_2F\in L^2\}$ and $\|B^{s/2}F\|_2=\|\langle\xi\rangle^s\mathcal F_2F\|_2$ for $s\ge0$. The multiplier is at least one, so $B\ge I$; the calculus is transported first for simple bounded multipliers and then by the bounded-truncation limits in [F7]. By [F2] and Plancherel these domains are exactly the named $H^s$ with their Fourier norms. The whole-space $L^2$ Hilbert space is nonzero for $n\ge1$, so [F4] applies and gives $[L^2(\mathbb R^n),H^2(\mathbb R^n)]_\theta=H^{2\theta}(\mathbb R^n)$ isometrically in these norms. [F1, F2, F3, F4, F7, given]

2.1 The operator $T$ is defined first on $L^2$ as $Er_D$. Its $L^2$ bound follows from restriction and the assumed $E$ bound. If $F\in H^2(\mathbb R^n)$, [F2] identifies it with a complex weak $W^{2,2}(\mathbb R^n)$ class with equivalent norm. Apply [F6] with $\Omega=\mathbb R^n$, $U=D$, $k=2$ and $p=2$: $r_DF\in W^{2,2}(D)$ and $\|r_DF\|_{W^{2,2}(D)}\le\|F\|_{W^{2,2}(\mathbb R^n)}\le C\|F\|_{H^2}$. The assumed endpoint bound for the same $E$ and [F2] now give $TF\in W^{2,2}(\mathbb R^n)=H^2(\mathbb R^n)$ with $\|TF\|_{H^2}\le C\|F\|_{H^2}$. Thus the two endpoint restrictions are the same complex-linear map. Apply common-operator spectral interpolation with endpoints $0,2$ to obtain $\|TF\|_{H^s}\le M_0^{1-s/2}M_2^{s/2}\|F\|_{H^s}$ for $0<s<2$, retaining the already established bounds at $s=0,2$. No domain interpolation assertion is used in obtaining this whole-space bound. [F1, F2, F4, F6, step 1.1, given]

2.2 For $s\ge0$ the weighted norm controls $L^2$, so $r_D:H^s(\mathbb R^n)\to L^2(D)$ is continuous. Its kernel is closed, and its quotient is Banach with the displayed infimum norm by the quotient theorem. All restriction classes are $L^2$ classes, so this also defines their restrictions as distributions and makes the norm definite: $\|u\|_{L^2(D)}\le\|u\|_{H^s(D)}$. [F2, F5, step 1.1]

3.1 If $u=r_DF$ for $F\in H^s$, then $Eu=Er_DF=TF$ as an $L^2$ class, and the whole-space bound makes it an $H^s$ class. If $F$ is replaced by another extension, their restrictions agree in $L^2(D)$, so the value of the already defined $E$ is unchanged. Hence $\|Eu\|_{H^s}\le C_s\|F\|_{H^s}$ for every extension $F$. Infimizing gives $\|Eu\|_{H^s}\le C_s\|u\|_{H^s(D)}$, while $r_DEu=u$ follows from its $L^2$ identity. This proves the quotient estimate without choosing a fractional extension operator or assuming a fractional-domain identification. [F2, F4, step 2.1, step 2.2, algebra] ∎


## Source notes

The whole-space norm uses the repository bracket weight, not an unannounced replacement by the Laplacian weight with 4π². Positive Fourier order gives actual L² representatives, which is what makes the common extension independent of an ambient extension representative. No exterior fractional theorem is imported.
