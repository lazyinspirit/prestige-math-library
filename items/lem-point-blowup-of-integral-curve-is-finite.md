---
id: lem-point-blowup-of-integral-curve-is-finite
kind: lemma
title: "The blowup of a one-dimensional integral Noetherian scheme at a closed point is finite"
status: published
origin: pipeline
deps: [def-blowup-scheme-along-ideal, def-exceptional-divisor-blowup, thm-blowup-projective, lem-blowup-isomorphism-off-center, thm-exceptional-divisor-normal-cone-proj, thm-proper-quasi-finite-is-finite, def-quasi-finite-morphism-schemes, thm-blowup-effective-cartier-divisor-isomorphism, thm-one-dimensional-regular-local-rings-are-dvrs, thm-hilbert-samuel-dimension-theorem, def-hilbert-samuel-function-and-polynomial, thm-hilbert-polynomial-degree-support-dimension, def-projective-scheme-from-a-homogeneous-quotient, def-integral-scheme, def-dimension-noetherian-topological-space, def-axiom-of-choice, thm-hilbert-polynomial-coherent-sheaf, def-hilbert-function-sheaf-projective, thm-closed-subschemes-projective-space-homogeneous-ideals, cor-h0-projective-space-o-d-homogeneous-polynomials, thm-serre-vanishing, thm-projective-morphism-proper, thm-equivalent-characterisations-of-a-dvr, def-locally-noetherian-and-noetherian-scheme, thm-noetherian-ring-quotients-and-localisations, thm-pullback-center-ideal-invertible, def-embedding-dimension-and-regular-local-ring, def-symmetric-algebra-qc-module, def-relative-proj-quasi-coherent-graded-algebra, cor-finite-variable-polynomial-ring-noetherian, def-coherent-module-scheme]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, tag 0BI4 (Lemma 54.15.1)"
      url: https://stacks.math.columbia.edu/tag/0BI4
      locator: "Lemma 54.15.1 proof: the blowup morphisms are finite because of Varieties, Lemma 33.17.2 (tag 0AB7); complete text retrieved 2026-10-03. The local proof here replaces that finiteness input by proper plus quasi-finite."
    - title: "The Stacks Project, tag 0AB7 (Varieties, Lemma 33.17.2)"
      url: https://stacks.math.columbia.edu/tag/0AB7
      locator: "Lemma 33.17.2, condition (1): if f is proper, O_{Y,y} is Noetherian of dimension at most one, and the residue-field extension at every generic point of X over its image is finite or algebraic, then f is finite over a neighbourhood of y. The proof here instead uses proper plus quasi-finite (tag 02LS)."
    - title: "The Stacks Project, tag 02LS (More on Morphisms, Lemma 37.44.1)"
      url: https://stacks.math.columbia.edu/tag/02LS
      locator: "Proper with finite fibres is equivalent to finite; the library item thm-proper-quasi-finite-is-finite supplies this."
    - title: "The Stacks Project, tag 0AGQ (Resolution of Surfaces, Lemma 54.3.1)"
      url: https://stacks.math.columbia.edu/tag/0AGQ
      locator: "The fibre of a two-dimensional point blowup is Proj of the associated graded ring, computed via gr_m A = kappa[X,Y]; retrieved 2026-10-03. Here the one-dimensional case is treated by the Hilbert-Samuel computation."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $Y$ be an integral
Noetherian scheme of dimension one ([[def-integral-scheme]],
[[def-dimension-noetherian-topological-space]]) and let $p\in Y$ be a closed
point. Let $\beta:Y_1=\operatorname{Bl}_pY\to Y$ be the blowup of $Y$ in $p$
([[def-blowup-scheme-along-ideal]]). Then $\beta$ is proper and of finite type, is locally H-projective, and admits the global closed immersion
$Y_1\hookrightarrow\operatorname{Proj}_Y\operatorname{Sym}(\mathcal I_p)$
for the coherent center ideal $\mathcal I_p$. The presenting sheaf $\mathcal I_p$ is coherent and need not be locally free or globally generated. This does not assert a global H-projective immersion into $\mathbb P^N_Y$ for a single integer $N$. It restricts to an isomorphism over
$Y\setminus\{p\}$; its fibre over $p$ is the projectivized associated graded
scheme $\operatorname{Proj}(\operatorname{gr}_{\mathfrak m_p}\mathcal O_{Y,p})$
([[thm-exceptional-divisor-normal-cone-proj]]), which is a finite scheme over
the residue field $\kappa(p)$; consequently $\beta$ is quasi-finite and
therefore finite. Moreover $\beta$ is an isomorphism if and only if
$\mathcal O_{Y,p}$ is regular, equivalently if and only if the maximal ideal
$\mathfrak m_p$ is invertible; in the regular case
$\beta_*\mathcal O_{Y_1}=\mathcal O_Y$.

## Facts & Assumptions

[F1] Let $A=\mathcal O_{Y,p}$ with maximal ideal $\mathfrak m$. Since $Y$ is integral, $Y$ has a nonempty affine open cover by spectra of domains, so $A$ is a domain; since $Y$ is Noetherian, $A$ is a Noetherian local ring; and since $p$ is a closed point of the one-dimensional scheme $Y$, $\dim A=1$ ([[def-integral-scheme]], [[def-locally-noetherian-and-noetherian-scheme]], [[thm-noetherian-ring-quotients-and-localisations]], [[def-dimension-noetherian-topological-space]]).

[F2] Hilbert-Samuel theory: for the Noetherian local ring $(A,\mathfrak m)$ and $M=A\ne0$ with ideal of definition $\mathfrak m$, the function $\chi(n)=\ell_A(A/\mathfrak m^{n+1})$ agrees with a polynomial for large $n$ whose degree is $\dim\operatorname{Supp}(A)=1$; the differences $\varphi(n)=\ell_A(\mathfrak m^n/\mathfrak m^{n+1})=\chi(n)-\chi(n-1)$ are therefore eventually constant ([[def-hilbert-samuel-function-and-polynomial]], [[thm-hilbert-samuel-dimension-theorem]]).

[F3] Projective Hilbert theory over a field $k$: for a closed subscheme $E=V_+(I)=\operatorname{Proj}(k[x_0,\dots,x_r]/I)\hookrightarrow\mathbb P^r_k$ with $\mathcal O_E(1)$ the restriction of the twisting sheaf, the Hilbert polynomial of $\mathcal O_E$ exists, agrees with $h_{\mathcal O_E}(n)=\dim_kH^0(E,\mathcal O_E(n))$ for all large $n$, and has degree $\dim\operatorname{Supp}\mathcal O_E=\dim E$; moreover $H^0(\mathbb P^r_k,\mathcal O(n))$ is the degree-$n$ part of $k[x_0,\dots,x_r]$, and Serre vanishing kills $H^1(\mathbb P^r_k,\mathcal I_E(n))$ for all large $n$, where $\mathcal I_E$ is the coherent ideal sheaf of $E$. The homogeneous-ideal/saturation dictionary identifies the chart ideals of $I$ and $I^{\mathrm{sat}}$; the eventual coordinate-ring comparison is derived below ([[thm-closed-subschemes-projective-space-homogeneous-ideals]], [[def-projective-scheme-from-a-homogeneous-quotient]], [[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[thm-serre-vanishing]], [[def-hilbert-function-sheaf-projective]], [[thm-hilbert-polynomial-coherent-sheaf]], [[thm-hilbert-polynomial-degree-support-dimension]]).

[F4] Properness and finiteness: a projective morphism is proper and of finite type, and every proper quasi-finite morphism is finite; quasi-finiteness is finite type together with zero-dimensional fibres at every point ([[thm-projective-morphism-proper]], [[thm-proper-quasi-finite-is-finite]], [[def-quasi-finite-morphism-schemes]]).

[F5] A one-dimensional regular local ring is a discrete valuation ring, and a nonzero Noetherian local domain of dimension one is a discrete valuation ring exactly when its maximal ideal is principal ([[thm-one-dimensional-regular-local-rings-are-dvrs]], [[thm-equivalent-characterisations-of-a-dvr]]).

[F6] The Axiom of Choice is assumed, inherited from the blowup, Hilbert-Samuel and projective-cohomology suppliers cited above ([[def-axiom-of-choice]]).

## Proof

**Given:** AC, an integral Noetherian one-dimensional scheme $Y$, a closed point $p\in Y$ and the blowup $\beta:Y_1=\operatorname{Bl}_pY\to Y$.

1.1 Put $\mathcal I_p$ for the coherent ideal of the closed point. Multiplication gives a canonical graded surjection $\operatorname{Sym}(\mathcal I_p)\twoheadrightarrow\bigoplus_{n\ge0}\mathcal I_p^n$: it sends a degree-$n$ product of local sections to their product in $\mathcal I_p^n$ ([[def-symmetric-algebra-qc-module]]). Relative Proj is constructed on affine base opens ([[def-relative-proj-quasi-coherent-graded-algebra]]). On each standard homogeneous open, the quotient map induces a surjection on degree-zero localized coordinate rings, hence a closed immersion. These maps come from the same graded quotient and glue to the global closed immersion $Y_1\hookrightarrow\operatorname{Proj}_Y\operatorname{Sym}(\mathcal I_p)$, the projective presentation asserted here. Locally the center has finitely many generators, so [[thm-blowup-projective]] gives local embeddings into finite-dimensional projective spaces; it also gives global properness, and finite type follows from those local embeddings. Away from $p$ the blowup is an isomorphism ([[lem-blowup-isomorphism-off-center]]), so every fibre away from $p$ is a single point. By [F1], $A=\mathcal O_{Y,p}$ is a Noetherian local domain of dimension one. [F1, F4, given, algebra]

2.1 The fibre $E=\beta^{-1}(p)$ is canonically $\operatorname{Proj}_Z(\operatorname{gr}_{\mathfrak m_p}\mathcal O_Y)$ over $Z=\{p\}=\operatorname{Spec}\kappa(p)$ ([[thm-exceptional-divisor-normal-cone-proj]]); over the one-point base $Z$ this is $\operatorname{Proj}(S)$ with $S=\operatorname{gr}_{\mathfrak m}A=\bigoplus_{n\ge0}\mathfrak m^n/\mathfrak m^{n+1}$, a graded $\kappa(p)$-algebra generated in degree one by the finite-dimensional space $\mathfrak m/\mathfrak m^2$. Fixing generators of $\mathfrak m/\mathfrak m^2$ presents $S$ as a quotient of a polynomial ring $\kappa(p)[x_0,\dots,x_r]$, so $E=V_+(I)=\operatorname{Proj}(S)$ is a closed subscheme of $\mathbb P^r_{\kappa(p)}$ with $\mathcal O_E(1)$ the restriction of the twisting sheaf ([F3]). [F1, step 1.1]

2.2 Isomorphism criterion. If $\beta$ is an isomorphism, then the pulled-back center ideal $\mathfrak m_p\mathcal O_{Y_1}$ is invertible ([[thm-pullback-center-ideal-invertible]]), and since an isomorphism identifies ideal sheaves and their invertibility, $\mathfrak m_p$ itself is invertible; then $\mathfrak m=\mathfrak m_pA$ is generated by a nonzerodivisor, so $\dim_\kappa\mathfrak m/\mathfrak m^2=1=\dim A$ and $A$ is regular by the definition of regularity ([[def-embedding-dimension-and-regular-local-ring]]). Conversely, if $A$ is regular, then $A$ is a discrete valuation ring by [F5] and $\mathfrak m_p$ is generated by a uniformizer, which is a nonzerodivisor and generates the maximal ideal at $p$ while $\mathfrak m_p$ is the unit ideal away from $p$; so $\mathfrak m_p$ is invertible and the blowup of an invertible ideal is an isomorphism ([[thm-blowup-effective-cartier-divisor-isomorphism]]), with $\beta_*\mathcal O_{Y_1}=\mathcal O_Y$. This proves the equivalence and the final clause. [F1, F5, step 1.1]

3.1 By [F2], $\chi(n)$ agrees eventually with a polynomial $an+b$ of degree one. Since $\chi(n)$ is nonnegative for every $n$ and $a\ne0$, its leading coefficient $a$ is positive. For all sufficiently large $n$, the difference $\chi(n)-\chi(n-1)$ equals $a$; this difference is $\ell_A(\mathfrak m^n/\mathfrak m^{n+1})=\dim_{\kappa(p)}S_n$, because the quotient is annihilated by $\mathfrak m$. Thus the graded Hilbert function is eventually a positive constant $c=a\in\mathbb Z_{>0}$. [F1, F2, step 2.1, algebra]

4.1 Write $P=\kappa(p)[x_0,\ldots,x_r]$, $S=P/I$, and $\mathfrak b=P_+$. The ideal sheaf $\mathcal I_E$ is coherent: on each standard affine chart it is a finite ideal in a Noetherian ring ([[def-coherent-module-scheme]]). By [F3], Serre vanishing applied to this ideal sheaf makes the global sections of $0\to\mathcal I_E(n)\to\mathcal O_{\mathbb P^r}(n)\to\mathcal O_E(n)\to0$ exact on the right for $n\gg0$. The sections of the middle sheaf are $P_n$, and its kernel is $(I^{\mathrm{sat}})_n$: a homogeneous polynomial represents a section of the ideal sheaf exactly when its fractions on every standard chart lie in the chart ideals, the saturation criterion of [[thm-closed-subschemes-projective-space-homogeneous-ideals]]. Thus $H^0(E,\mathcal O_E(n))=P_n/(I^{\mathrm{sat}})_n$ for large $n$. The polynomial ring $P$ is Noetherian ([[cor-finite-variable-polynomial-ring-noetherian]]), so the graded module $I^{\mathrm{sat}}/I$ has finitely many homogeneous generators. Each is annihilated by some power of $\mathfrak b$ by the definition of saturation; one common power $\mathfrak b^N$ annihilates them all. If their degrees are at most $D$, then in degree $n\ge D+N$ every coefficient multiplying such a generator has degree at least $N$ and lies in $\mathfrak b^N$. Hence $(I^{\mathrm{sat}}/I)_n=0$ for all such $n$. It follows that $H^0(E,\mathcal O_E(n))=S_n$ eventually. By step 3.1 its dimension is the positive constant $c$, so the Hilbert polynomial of $\mathcal O_E$ is the nonzero constant $c$. Its degree equals $\dim E$ by [F3], giving $\dim E=0$. [F3, step 2.1, step 3.1, algebra]

5.1 The space $E$ is a closed subscheme of the Noetherian space $\mathbb P^r_{\kappa(p)}$, hence is Noetherian of dimension zero by step 4.1, so it has finitely many points and all its local rings are zero-dimensional; as a closed subscheme of projective space $E$ is proper and of finite type over $\kappa(p)$, so $E$ is quasi-finite over $\kappa(p)$ and therefore finite over $\kappa(p)$ by [F4]. Combined with step 1.1, where the fibre over every $q\ne p$ is a single point, every fibre of $\beta$ is finite with zero-dimensional local rings, so $\beta$ is quasi-finite; as $\beta$ is also proper by step 1.1, [F4] makes $\beta$ finite. This proves the first part of the statement and the finiteness of the fibre over $p$. [F4, step 1.1, step 4.1]

6.1 All assertions are proved: $\beta$ has the displayed closed immersion into $\operatorname{Proj}_Y\operatorname{Sym}(\mathcal I_p)$, is locally H-projective, proper, finite type, finite, quasi-finite with fibre $\operatorname{Proj}(\operatorname{gr}_{\mathfrak m_p}\mathcal O_{Y,p})$ over $p$, an isomorphism over $Y\setminus\{p\}$, and an isomorphism exactly when $\mathcal O_{Y,p}$ is regular, and the fiber over $p$ is finite by step 5.1. [F6, step 2.1, step 5.1, step 2.2] ∎
