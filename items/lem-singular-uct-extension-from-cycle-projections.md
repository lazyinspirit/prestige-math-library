---
id: lem-singular-uct-extension-from-cycle-projections
kind: lemma
title: Singular UCT extension from cycle projections
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-axiom-of-choice, lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces, def-ext-via-a-projective-resolution-of-the-first-variable, def-singular-cochain-complex-with-coefficients, thm-free-modules-are-projective-with-choice-boundary]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Miller, section 27, Theorem 27.1 and proof, printed pages 73–74
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Statement

Assume AC. Let $C$ be a nonnegative complex of free modules over a commutative PID $R$, and let $G$ be an $R$-module. Write $Z_j=\ker d_j$, $B_j=\operatorname{im}d_{j+1}$ and $H_j=Z_j/B_j$, with negative terms zero. Compute $\operatorname{Ext}^1_R(H_{n-1},G)$ from the length-one free resolution $B_{n-1}\hookrightarrow Z_{n-1}\twoheadrightarrow H_{n-1}$. For every $n\ge0$ the map
$$\iota:\operatorname{Ext}^1_R(H_{n-1},G)\longrightarrow H^n(\operatorname{Hom}_R(C,G)),\qquad [\psi]\longmapsto[\psi d_n]$$
is well-defined and injective. Its image is the kernel of evaluation $\beta:[\varphi]\mapsto([z]\mapsto\varphi(z))$, and $\beta$ is surjective. These maps are natural in chain maps and coefficient homomorphisms. Identification of this Ext group with that computed from any other length-one projective resolution is independent of comparison lifts; no identification with an injective-resolution definition is assumed.

## Facts & Assumptions

[F1] [[lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces]] proves, under AC, that $Z_j,B_j$ are free and supplies $C_j=Z_j\oplus s_j(B_{j-1})$. Put $\pi_j(c)=c-s_jd_jc$.

[F2] [[def-ext-via-a-projective-resolution-of-the-first-variable]] defines Ext from the cohomology of Hom of a supplied projective resolution, with positive differential.

[F3] [[def-singular-cochain-complex-with-coefficients]] uses the positive cochain convention $\delta\varphi=\varphi d$, which we use for this general complex as well.

[F4] [[def-axiom-of-choice]] is assumed. The free lifting construction in [[thm-free-modules-are-projective-with-choice-boundary]] chooses preimages of basis values through surjections. Projective modules have that lifting property by definition.

## Proof

**Given:** $R,C,G,n$ as stated. A cochain of degree $j$ is an $R$-linear map $C_j\to G$, and its differential is precomposition with $d_{j+1}$.

1.1 The differential of these cochains squares to zero because $d_{j+1}d_{j+2}=0$. A cocycle $\varphi$ kills $B_n$, so its restriction to $Z_n$ factors uniquely through $H_n$. A coboundary $h d_n$ vanishes on $Z_n$. Thus $\beta$ is well-defined and linear, including on both kinds of representatives. By [F1], $0\to B_{n-1}\to Z_{n-1}\to H_{n-1}\to0$ is a free resolution. By [F2], its Ext group is $\operatorname{Hom}(B_{n-1},G)$ modulo the restrictions of maps $Z_{n-1}\to G$. [F1, F2, F3, given]

2.1 For $\psi:B_{n-1}\to G$, the cochain $\psi d_n$ is closed. If $\psi$ changes by $g|_{B_{n-1}}$, with $g:Z_{n-1}\to G$, its cochain changes by $g\pi_{n-1}d_n=\delta(g\pi_{n-1})$, since $d_n$ lands in $Z_{n-1}$ and $\pi_{n-1}$ is the identity there. Thus $\iota$ descends to a linear map on Ext. If $\psi d_n=h d_n$ for $h:C_{n-1}\to G$, surjectivity of $d_n:C_n\to B_{n-1}$ gives $\psi=h|_{B_{n-1}}$. The map $h|_{Z_{n-1}}$ then represents the required restriction, so $[\psi]=0$. This proves injectivity. [F1, F3, step 1.1]

2.2 For $u:H_n\to G$, write $q:Z_n\to H_n$ for the quotient and set $\varphi=u q\pi_n$. This kills $B_n$, since $\pi_n$ is the identity on $Z_n$ and $q$ kills $B_n$. It is a cocycle with evaluation $u$, so $\beta$ is onto. The construction is linear in $u$ for a fixed projection. It does not assert that the chosen projection is natural. [F1, step 1.1]

3.1 Every $\psi d_n$ vanishes on $Z_n$, hence has zero evaluation. Conversely, if a cocycle $\varphi$ has zero evaluation, then $\varphi(z)=0$ for every $z\in Z_n$: the zero map on $H_n$ is zero on every class. Define $\psi(d_nc)=\varphi(c)$. If $d_nc=d_nc'$, then $c-c'\in Z_n$, so the definition is independent of the preimage, is linear, and gives $\varphi=\psi d_n$. This proves both containments of $\operatorname{im}\iota=\ker\beta$. [step 1.1, step 2.1]

3.2 Let $f:C\to D$ be a chain map. It restricts to maps $Z_jC\to Z_jD$ and $B_jC\to B_jD$ commuting with inclusion and quotient, hence induces the contravariant map on the displayed Ext cokernels by precomposition on $B_{n-1}$. A restricted map from $Z_{n-1}D$ pulls back to a restricted map from $Z_{n-1}C$, so this is well-defined. The equality $(\psi d_n^D)f_n=(\psi f_{n-1}|_{B_{n-1}C})d_n^C$ proves naturality of $\iota$. On cycles, $(\varphi f_n)(z)=\varphi(f_nz)$ proves naturality of $\beta$. A coefficient map commutes with every formula by postcomposition. Identity and composition laws follow directly from composition of maps. [step 1.1, step 2.1]

4.1 For completeness let $0\to P_1\xrightarrow{a}P_0\xrightarrow{q}M\to0$ and $0\to Q_1\xrightarrow{b}Q_0\xrightarrow{r}N\to0$ be length-one projective resolutions, and $v:M\to N$. Projectivity lifts $vq$ to $f_0:P_0\to Q_0$ through $r$. Since $rf_0a=0$, there is a unique $f_1:P_1\to Q_1$ with $bf_1=f_0a$. Any second lift $g_0$ has $f_0-g_0=bh$ for a unique $h:P_0\to Q_1$, and injectivity of $b$ gives $f_1-g_1=ha$. For $\psi:Q_1\to G$, the difference $\psi f_1-\psi g_1=(\psi h)a$ is zero in the cokernel defining Ext. Thus the induced map is independent of the lift. Composites of lifts lift composites; identity lifts induce identities. Taking $M=N$ and $v=1$ in both directions yields inverse canonical isomorphisms between the two cokernels. This also proves compatibility with the restricted-resolution maps of step 3.2 and with coefficient maps. For free resolutions the requisite projectivity follows from [F4]; for supplied projective resolutions it is their defining property. [F2, F4, step 1.1, step 3.2]

5.1 Steps 2.1, 3.1 and 2.2 give the asserted short exact sequence, and steps 3.2 and 4.1 give its natural interpretation. At $n=0$, $B_{-1}=Z_{-1}=H_{-1}=0$, so Ext is zero and evaluation is an isomorphism. For the zero complex or $G=0$ every displayed map is the unique zero map. For a single nonzero free term in degree $n$, evaluation is literally the identity on $\operatorname{Hom}(C_n,G)$; no boundary term survives. AC is used in [F1] for arbitrary-rank freeness and sections, and in [F4] for free comparison lifts; the quotient and exactness chases introduce no further choices. No injective-derived or balanced Ext theorem has been used. [F1, F2, F4, step 2.1, step 3.1, step 2.2, step 3.2, step 4.1] ∎
