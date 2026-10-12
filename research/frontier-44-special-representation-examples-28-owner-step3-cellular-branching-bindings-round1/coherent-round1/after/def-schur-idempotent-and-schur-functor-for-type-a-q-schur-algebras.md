---
id: def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras
kind: definition
title: "The Schur idempotent and the Schur functor for type-A q-Schur algebras"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-direct-sum-of-a-family-of-modules, def-generic-type-a-hecke-algebra, def-left-and-right-modules, def-murphy-elements-and-murphy-tableau-elements, def-type-a-q-schur-algebra-and-weyl-modules, thm-standard-basis-of-the-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
proof_strategy: direct
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 4, (4.13) with Corollaries 4.9 and 4.12 (construction of the semistandard basis elements phi_{ST} of S(d,n)), printed pp. 36-44: for omega=(1^n) the diagonal element phi_{t^omega t^omega} is the projection of M onto the summand M^omega=H; Proposition 4.19, printed pp. 43-44, uses the Schur functor X -> Xe on the Weyl and simple modules"
    - title: "Gordon James and Andrew Mathas, A q-analogue of the Jantzen-Schaper theorem, Proc. London Math. Soc. (3) 74 (1997) 241-274"
      url: "https://doi.org/10.1112/S0024611597000081"
      locator: "Section 2: the idempotent phi_{T_omega T_omega} of the q-Schur algebra with e S e isomorphic to the Hecke algebra, the idempotent truncation underlying the Schur functor"
---

## Definition

Let $R$ be a commutative ring with $1$, let $q\in R^{\times}$, let $d,n\ge0$ with $d\ge n$, and let $H=H_{R,q}(S_n)$ ([[def-generic-type-a-hecke-algebra]]). Write $S:=S(d,n)=\mathrm{End}_H(M)$ for the type-A q-Schur algebra with $M=\bigoplus_{\mu\in\Lambda(d,n)}M^{\mu}$ the direct sum of the permutation modules ([[def-type-a-q-schur-algebra-and-weyl-modules]], [[def-direct-sum-of-a-family-of-modules]]) and let $\{\varphi_{ST}:\lambda\in\Lambda^{+}(d,n),\ S,T\in T_0(\lambda)\}$ be its cellular semistandard basis ([[def-murphy-elements-and-murphy-tableau-elements]] for the underlying Murphy elements and [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]] for the standard basis along which this basis is defined). Put $\omega:=(1^n)\in\Lambda(d,n)$, the composition with $n$ parts equal to $1$ (legitimate because $d\ge n$), so that the Young subgroup $S_\omega$ is trivial and $m_\omega=1$; hence $$M^{\omega}=m_\omega H=H$$ is the regular right $H$-module. Let $t^{\omega}$ be the unique standard $\omega$-tableau, with entries $1,2,\dots,n$ down its single column; it is in particular the unique row-standard $\omega$-tableau whose entries increase down the column. Set $$e:=\varphi_{t^{\omega}t^{\omega}}\in S.$$

Then:

1. $e$ is the projection of $M$ onto the direct summand $M^{\omega}=H$ along the other summands $M^{\mu}$, $\mu\ne\omega$; in particular $e^2=e$ and $$eSe\cong\mathrm{End}_H(M^{\omega})=\mathrm{End}_H(H),$$ via the algebra isomorphism $$\rho:H\longrightarrow eSe,\qquad h\longmapsto\rho_h,\qquad \rho_h(x):=hx,$$ left multiplication by $h$ on $M^{\omega}=H$ being a right $H$-module endomorphism. Here the isomorphism $eSe\cong\mathrm{End}_H(M^{\omega})$ sends $efe$ to $f|_{M^{\omega}}$ and is inverted by extending an endomorphism of $M^{\omega}$ by zero on the other summands, and the identification $\mathrm{End}_H(H)\cong H$ sends an endomorphism to its value at $1$. By the construction of the semistandard basis elements $\varphi_{ST}$ (Mathas (4.13) with Corollaries 4.9 and 4.12; see the locator above), the diagonal element $\varphi_{t^{\omega}t^{\omega}}$ is exactly the endomorphism of $M$ that is the identity on $M^{\omega}$ and zero on all $M^{\mu}$ with $\mu\ne\omega$, which is the projection asserted above. 2. The **Schur functor** is $$F:\mathrm{mod}\text{-}S\longrightarrow\mathrm{mod}\text{-}H,\qquad F(X):=Xe=X\otimes_SSe,$$ with the right $H$-action transported along $\rho$, so that $(xe)\cdot h:=x\,\rho_h$ for $x\in X$, $h\in H$ ([[def-left-and-right-modules]]). It is exact and $R$-linear on morphisms: as a **left** $S$-module, $Se$ is the image of the left-$S$-linear projection $s\mapsto se$ on $S$, hence is a direct summand of the regular left module and is projective. Tensoring right $S$-modules with this left module is therefore exact. Equivalently, for a short exact sequence of right modules, an element $ye$ in the target lifts to $xe$ from any lift $x$ of $y$; kernels and injections are likewise preserved by the same idempotent projection. The bimodule corner action makes these maps right $H$-linear. The convention is fixed: the functor is $X\mapsto Xe$ on the right, and the left-module formula $X\mapsto eX$ is not used on this page.