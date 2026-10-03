---
id: lem-nonaffine-group-target-rational-indeterminacy-divisors
kind: lemma
title: "Indeterminacy of a rational map to a group is divisorial"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, thm-nonaffine-regular-local-ring-is-ufd, cor-weak-nullstellensatz-algebraically-closed-coordinate-form, def-rational-map-integral-schemes]
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
    - title: "Milne, Abelian Varieties, Chapter I, Lemma 3.3, pp.17-18"
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: "Milne, Algebraic Groups (2022), 8.17, p.152"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be algebraically closed, $X$ a smooth integral finite-type $k$-scheme, and $H$ a separated finite-type $k$-group scheme. The complement of the maximal domain of a rational map $f:X\dashrightarrow H$ is either empty or a finite union of prime divisors.

## Facts & Assumptions

[F1] Smooth local rings are UFDs, and hence a rational function is regular at a point exactly when none of its pole divisors contains that point. ([[thm-nonaffine-regular-local-ring-is-ufd]])

[F2] Nonempty opens of finite-type schemes over an algebraically closed field have rational closed points. ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

[F3] Rational maps to separated schemes have a unique maximal open domain, obtained by gluing representatives. Group multiplication and inverse are morphisms. ([[def-rational-map-integral-schemes]], [[def-abelian-variety-over-a-field]])

## Proof

**Given:** AC, $k$, $X$, $H$, and $f$ as above.

1.1 On the product of its domain with itself define $\Phi(x,y)=f(x)f(y)^{-1}$. This is a rational map $X\times X\dashrightarrow H$ and is the identity on the generic diagonal. Fix an affine neighbourhood $W=\operatorname{Spec}B$ of the identity in $H$, and finite $k$-algebra generators $b_1,\ldots,b_r$ of $B$. The preimage of $W$ under $\Phi$ is a nonempty open since it contains the diagonal over the domain of $f$. Thus $r_i=\Phi^*b_i$ are rational functions on $X\times X$. Their finitely many pole divisors determine, by [F1], precisely the locus where the rational map to $W$ is not regular. Where all $r_i$ are regular, their algebraic relations remain valid and define its extension as a morphism to $W$. [F1, F3, given, construct]

2.1 For a closed point $x\in X(k)$, $f$ is defined at $x$ if and only if $\Phi$ is defined at $(x,x)$, and the value there is the identity. The forward implication is immediate. Conversely, if $\Phi$ extends at $(x,x)$, its diagonal restriction is the identity by generic agreement and separatedness. Choose an open neighbourhood in $X\times X$ on which it is regular. Its slice at $x$ in the second coordinate meets the dense domain of $f$, so [F2] supplies a rational point $u$ in that intersection. Restricting $\Phi$ to $X\times\{u\}$ near $x$ and multiplying by the fixed $f(u)$ extends $f$ near $x$. Since the value on the diagonal is the identity, this is also equivalent to all $r_i$ being regular at $(x,x)$: if $\Phi$ is defined there its value lies in $W$, and conversely the regular $r_i$ extend the map to $W$. [F1, F2, F3, step 1.1, algebra]

3.1 No pole divisor of any $r_i$ contains the whole diagonal: $\Phi$ maps the diagonal over the domain of $f$ to the identity in $W$. Each such prime divisor is locally Cartier by [F1], and its restriction to the integral smooth diagonal is either empty or an effective Cartier divisor, since its local equation is not zero at the generic point of the diagonal. Its support therefore is a union of codimension-one subvarieties of $X$. By step 2.1 the indeterminacy locus equals the union of these restricted supports on all closed points. Both are closed subsets of a finite-type scheme over an algebraically closed field, so [F2] shows they are equal as subsets. This is precisely the claimed pure divisorial complement. AC is inherited from [F1]–[F2]. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
