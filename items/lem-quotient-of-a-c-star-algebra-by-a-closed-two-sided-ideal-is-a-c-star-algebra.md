---
id: lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra
kind: lemma
title: Quotients of C star algebras by closed two-sided ideals
deps:
  - thm-quotient-of-banach-by-closed-subspace-is-banach
  - def-c-star-algebra
  - lem-closed-ideal-quotient-is-a-banach-algebra
  - def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra
  - lem-c-star-spectral-radius-equals-norm-for-normal-elements
  - lem-c-star-positive-calculus-and-order-estimates
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - thm-minimal-c-star-unitization
  - thm-commutative-gelfand-naimark
  - def-axiom-of-choice
  - thm-complex-stone-weierstrass-self-adjoint
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the positivity/order calculator, the ideal approximate units and the quotient Banach-algebra interface; the norm computations add no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras (complete 179-page text retrieved)"
      url: "https://arxiv.org/pdf/1211.3404"
      locator: "§3.2, Propositions 3.2.11–3.2.12 and Corollary 3.2.13 (contractivity and injective isometry); §4.3, Propositions 4.3.4 and Corollary 4.3.5 (quotient norms and closed images). Complete arguments read."
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Example F.4.1(iv) (Gelfand–Naimark) and the surrounding discussion of C*-algebras"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $A$ be a C\*-algebra and let
$J\trianglelefteq A$ be a closed two-sided ideal. Then $A/J$, with the quotient
norm and the induced involution, is a C\*-algebra. The quotient map is
contractive, has norm $1$ when $A/J\ne0$ and norm $0$ when $A/J=0$. Every
star-homomorphism from $A$ to a C\*-algebra whose kernel contains $J$ factors
uniquely through $A/J$. Every injective star-homomorphism between C\*-algebras
is isometric, and every star-homomorphism between C\*-algebras has closed
image.

## Facts & Assumptions

**Given:** AC; a C\*-algebra $A$; a closed two-sided ideal $J\trianglelefteq A$; the quotient $A/J$ with its quotient norm $\|a+J\|=\inf_{j\in J}\|a+j\|$ and induced involution.

[F1] $J$ is self-adjoint and has a two-sided approximate unit $(u_\lambda)$ of positive contractions: $0\le u_\lambda\le1$, $u_\lambda j\to j$ and $ju_\lambda\to j$ for every $j\in J$ ([[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]]).

[F2] Positivity and order toolkit, including the single-element continuous calculus, its naturality under unital star-homomorphisms, $\|h\|=r(h)=\max|\sigma(h)|$ for self-adjoint $h$, and contractivity of star-homomorphisms between C\*-algebras ([[lem-c-star-positive-calculus-and-order-estimates]], [[lem-c-star-spectral-radius-equals-norm-for-normal-elements]], [[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]]).

[F3] The quotient of a Banach space by a closed linear subspace is complete under Countable Choice ([[thm-quotient-of-banach-by-closed-subspace-is-banach]]), which AC supplies here. For a two-sided ideal $J$, coset multiplication is well defined because $(a+j)(b+k)-ab=ak+jb+jk\in J$; associativity and bilinearity descend. For near-minimizing representatives, $\|ab+J\|\le\|(a+j)(b+k)\|\le\|a+j\|\|b+k\|$, and taking the two infima proves submultiplicativity. The involution descends because $J$ is self-adjoint. Thus $A/J$ is a possibly nonunital Banach algebra, including the zero case $J=A$, without applying the unital/proper-ideal quotient supplier outside its hypotheses.

[F4] The minimum modulus of a self-adjoint element satisfies $\max|\sigma(h)|=\|h\|$, and for a continuous $f$ on an interval containing $\sigma(h)$ the calculus element satisfies $\|f(h)\|=\sup_{\sigma(h)}|f|$ and $f(h)=0$ exactly when $f$ vanishes on $\sigma(h)$; functions vanishing at $0$ applied to $h$ lie in a nonunital $A$ ([[lem-c-star-positive-calculus-and-order-estimates]]).

[F5] Polynomials are uniformly dense in the continuous functions on a compact real interval. If $f(0)=0$ on an interval containing $0$, subtracting the constant term from approximating polynomials gives approximants with zero constant term ([[thm-complex-stone-weierstrass-self-adjoint]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a C\*-algebra $A$, a closed two-sided ideal $J$, and the quotient $A/J$ with its quotient norm.

1.1 For every $a\in A$ one has $\|a+J\|=\lim_\lambda\|(1-u_\lambda)a\|=\lim_\lambda\|a(1-u_\lambda)\|$, and the induced involution is isometric: $\|a^*+J\|=\|a+J\|$. Indeed, $(1-u_\lambda)a=a-u_\lambda a$ with $u_\lambda a\in J$ gives $\|(1-u_\lambda)a\|\ge\|a+J\|$; conversely for $j\in J$ one has $(1-u_\lambda)a=(1-u_\lambda)(a+j)-(1-u_\lambda)j$, so $\|(1-u_\lambda)a\|\le\|a+j\|+\|(1-u_\lambda)j\|$ and for fixed $j$ the last term tends to $0$ by [F1], whence $\limsup_\lambda\|(1-u_\lambda)a\|\le\|a+j\|$ and, infimizing over $j$, $\limsup_\lambda\|(1-u_\lambda)a\|\le\|a+J\|$; the same computation on the right gives the second identity. Taking adjoints and using $u_\lambda^*=u_\lambda$ yields $\|a^*+J\|=\lim\|(1-u_\lambda)a^*\|=\lim\|a(1-u_\lambda)\|=\|a+J\|$. [F1]

1.2 Every injective star-homomorphism $\varphi:E\to F$ is isometric. It is contractive by [F2]. If $h=h^*\in E$ had $r:=\|\varphi(h)\|<\|h\|$, choose $\lambda_0\in\sigma(h)$ with $|\lambda_0|=\|h\|$ and a continuous $f$ on $[-\|h\|,\|h\|]$ vanishing on $[-r,r]$ but not at $\lambda_0$. In particular $f(0)=0$. By [F5] choose polynomials $p_n$ with zero constant term converging uniformly to $f$. Then $p_n(h)\to f(h)\in E$ and $p_n(\varphi(h))\to f(\varphi(h))$ by [F4], while multiplicativity and linearity give $\varphi(p_n(h))=p_n(\varphi(h))$ without any unitality assumption. Boundedness of $\varphi$ gives $\varphi(f(h))=f(\varphi(h))=0$, although $f(h)\ne0$ by [F4], contradicting injectivity. Hence $\|\varphi(h)\|=\|h\|$ for self-adjoint $h$, and the C\*-identity gives $\|\varphi(a)\|^2=\|\varphi(a^*a)\|=\|a^*a\|=\|a\|^2$ for arbitrary $a$. [F2, F4, F5]

2.1 The quotient satisfies the C\*-identity: $\|a+J\|^2=\|a^*a+J\|$ for every $a$. Indeed, by step 1.1 twice, $\|a+J\|^2=\lim_\lambda\|a(1-u_\lambda)\|^2$ and $\|a(1-u_\lambda)\|^2=\|(1-u_\lambda)a^*a(1-u_\lambda)\|$; writing $(1-u_\lambda)a^*a(1-u_\lambda)=(1-u_\lambda)(a^*a+j)(1-u_\lambda)-(1-u_\lambda)j(1-u_\lambda)$ for $j\in J$ and using $\|1-u_\lambda\|\le1$ gives $\limsup_\lambda\|(1-u_\lambda)a^*a(1-u_\lambda)\|\le\|a^*a+j\|+\lim_\lambda\|(1-u_\lambda)j(1-u_\lambda)\|=\|a^*a+j\|$, so $\|a+J\|^2\le\|a^*a+J\|$ after infimizing over $j$. The reverse inequality is submultiplicativity in the quotient Banach algebra of [F3] together with the isometric involution of step 1.1: $\|a^*a+J\|\le\|a^*+J\|\,\|a+J\|=\|a+J\|^2$. [F3, step 1.1]

3.1 $A/J$ is a C\*-algebra: it is a Banach algebra by [F3], its involution is isometric by step 1.1, and it satisfies the C\*-identity by step 2.1. The quotient map $q$ is contractive; if $A/J\ne0$ choose a nonzero coset $a+J$ and representatives $a+j_n$ with $\|a+j_n\|\to\|a+J\|$; the unit vectors $(a+j_n)/\|a+j_n\|$ have images of norm $\|a+J\|/\|a+j_n\|\to1$, so $\|q\|=1$, while $q=0$ and $\|q\|=0$ when $A/J=0$. A star-homomorphism $\psi:A\to B$ with $J\subseteq\ker\psi$ kills $J$, hence induces a well-defined star-homomorphism $\bar\psi:A/J\to B$ with $\psi=\bar\psi\circ q$, its boundedness follows from $\|\psi(a)\|=\|\psi(a+j)\|\le\|\psi\|\|a+j\|$ for every $j\in J$ by taking the infimum, and it is unique because $q$ is surjective. [F3, step 1.1, step 2.1]

4.1 Every star-homomorphism $\psi:A\to B$ between C\*-algebras has closed image: factor $\psi$ through $A/\ker\psi$ by step 3.1, obtaining an injective star-homomorphism $\bar\psi:A/\ker\psi\to B$, which is isometric by step 1.2; the image $\bar\psi(A/\ker\psi)$ is complete as the isometric image of a complete space, hence closed in $B$, and it equals $\psi(A)$. [step 1.2, step 3.1]

5.1 The Axiom of Choice is inherited from the approximate-unit and calculus suppliers of [F1]–[F4]; the quotient norm and factorization arguments add no further choice ([[def-axiom-of-choice]]). [given, F1, F2] ∎ 
