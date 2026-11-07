---
id: lem-cm-idelic-norm-cyclotomic-character-relation
kind: lemma
title: "The finite-idelic norm and reciprocal Artin cyclotomic character differ by a positive rational"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-idele-group-of-a-global-field
  - def-global-artin-map-as-product-of-local-reciprocity-maps
  - thm-global-artin-reciprocity-and-norm-index
  - thm-archimedean-local-reciprocity
  - lem-canonical-local-reciprocity-is-compatible-with-field-norms
  - thm-local-artin-reciprocity-and-norm-index
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-local-artin-unramified-frobenius-normalization
  - lem-arithmetic-frobenius-on-a-cyclotomic-field
  - thm-chinese-remainder-theorem-for-comaximal-ideals
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Lemmas3.4–3.5, printed21, complete passages read. Lemma3.4 is labelled an exercise; its needed cyclotomic calculation is proved locally below."
verification: {}
---

## Statement

Assume AC. Let $F\subset\mathbb C$ be a totally imaginary number field, in particular any CM field or reflex field. Let $s\in\mathbb A_{f,F}^{\times}$ and $\sigma\in\operatorname{Aut}(\mathbb C/F)$ satisfy
$$\operatorname{art}_F(s)=\sigma|_{F^{\mathrm{ab}}},$$
where lowercase $\operatorname{art}$ is the reciprocal of the global arithmetic Artin map, so a local uniformizer at an unramified place maps to inverse arithmetic Frobenius. Let $\chi_{\mathrm{cyc}}(\sigma)\in\widehat{\mathbb Z}^{\times}$ be characterized by $\sigma(\zeta_n)=\zeta_n^{\chi_{\mathrm{cyc}}(\sigma)\bmod n}$ for every root of unity. Then there is a unique positive rational number $q$ such that
$$N_{F/\mathbb Q}(s)=q\,\chi_{\mathrm{cyc}}(\sigma)\qquad\hbox{in }\mathbb A_f^{\times}.$$
Explicitly $q=\prod_{\ell}\ell^{v_\ell(N_{F/\mathbb Q}(s)_\ell)}$, a finite product over rational primes, allowing negative exponents. This is a statement about finite ideles and the reciprocal Artin convention; it does not assert that a general finite idele is integral or that a rational quasi-isogeny is an actual isogeny.

## Facts & Assumptions

**Given:** AC and the field, finite idele, automorphism, and reciprocal Artin identity of the Statement.

[A1] AC implies DC and Countable Choice for the supplied Artin interfaces. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] An idele has unit components at all but finitely many finite places. The global Artin map is the continuous product of local Artin maps, with trivial complex-place factors and the real archimedean reciprocity factor. Real local reciprocity has kernel the positive reals. The global arithmetic map kills principal elements and induces the norm quotient isomorphism for every finite abelian extension. [[def-idele-group-of-a-global-field]] [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[thm-global-artin-reciprocity-and-norm-index]] [[thm-archimedean-local-reciprocity]]

[F2] The canonical local arithmetic reciprocity map commutes with field norms and inclusion of absolute Galois groups after abelianization. This remains true for its reciprocal. [[lem-canonical-local-reciprocity-is-compatible-with-field-norms]]

[F3] For an unramified finite local extension the norm on units is onto; local reciprocity has the norm subgroup as kernel, and an unramified uniformizer maps to arithmetic Frobenius. [[lem-unramified-local-unit-norms-and-cohomology]] [[thm-local-artin-reciprocity-and-norm-index]] [[thm-local-artin-unramified-frobenius-normalization]]

[F4] At primes not dividing a reduced cyclotomic index, arithmetic Frobenius acts on its primitive root by raising it to that rational prime. The Chinese remainder theorem solves the finitely many rational prime-power congruences. [[lem-arithmetic-frobenius-on-a-cyclotomic-field]] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]

## Proof

1.1 Every $t\in\mathbb A_f^{\times}$ has a unique decomposition $t=q(t)u(t)$ with $q(t)>0$ rational and $u(t)\in\widehat{\mathbb Z}^{\times}$. Namely put $q(t)=\prod_\ell\ell^{v_\ell(t_\ell)}$, finite by [F1], and $u(t)_\ell=t_\ell/q(t)$. Its $\ell$-valuation is zero. Uniqueness holds because a positive rational unit at every finite prime has zero valuation everywhere and is $1$. The reciprocal Artin map of $\mathbb Q$ kills the finite principal idele $q(t)$: the full principal idele is killed by [F1], and its real component is positive, hence killed by real reciprocity, whose kernel is $N_{\mathbb C/\mathbb R}\mathbb C^\times=\mathbb R_{>0}$. Therefore $\operatorname{art}_{\mathbb Q}(t)=\operatorname{art}_{\mathbb Q}(u(t))$. [A1, F1, given, construct, algebra]

1.2 Put $t=N_{F/\mathbb Q}(s)$. For any finite abelian extension $L/\mathbb Q$, multiply the local norm-compatibility identities [F2] over all places above each rational prime. Their norms multiply to the rational component of $t$, and their Galois inclusions give restriction to $L$. This proves $\operatorname{art}_{\mathbb Q}(t)|_L=\operatorname{art}_F(s)|_L$, where on the right use $FL/F$, an abelian extension inside $F^{\mathrm{ab}}$. Complex places of the totally imaginary $F$ have trivial local maps and norm to positive reals, so using finite rather than full ideles adds no archimedean factor. By the Given equality the right side is $\sigma|_L$. In particular the two sides agree on every cyclotomic field. [F1, F2, given, algebra]

2.1 For $u\in\widehat{\mathbb Z}^{\times}$ we prove that $\operatorname{art}_{\mathbb Q}(u)$ acts on every $n$-th root of unity by the exponent $u\bmod n$. For $n=1,2$ this is immediate. The extension $\mathbb Q(\zeta_n)/\mathbb Q$ is unramified outside $n$ and its Frobenius at $\ell\nmid n$ is $\zeta_n\mapsto\zeta_n^\ell$ by [F4]. For $n\equiv2\pmod4$ use the reduced index $f=n/2$, which is odd and has the same cyclotomic field; if needed choose compatible roots so $\zeta_n=-\zeta_f^{(f+1)/2}$, and the same prime-power formula follows for odd $\ell\nmid n$. At every prime not dividing $n$, local units act trivially by the norm-surjectivity and kernel statements in [F3]. At each of the finitely many primes $\ell\mid n$, continuity in [F1] gives an exponent $r_\ell$ for which $1+\ell^{r_\ell}\mathbb Z_\ell$ acts trivially on this finite cyclotomic extension. Increase $r_\ell$ to at least $v_\ell(n)$. Choose a positive integer $a$ satisfying $a\equiv u_\ell\pmod{\ell^{r_\ell}}$ for all $\ell\mid n$, using [F4]; then $\gcd(a,n)=1$. Put $v_\ell=a$ at $\ell\mid n$ and $v_\ell=1$ otherwise. The reciprocal Artin actions of $u$ and $v$ on $\zeta_n$ agree, by the chosen local kernels and the unramified-unit assertion outside $n$. [F1, F3, F4, step 1.1, choose, construct, algebra]

3.1 Compare $v$ with the finite principal idele $a$. Their quotient $a/v$ has component $1$ at primes dividing $n$, and component $a$ elsewhere. In its action on the cyclotomic field all unramified units disappear by [F3]. Its only nontrivial factors are the primes dividing $a$, each prime to $n$, and their product acts under reciprocal Artin by $\zeta_n\mapsto\zeta_n^{a^{-1}\bmod n}$, since $\prod_{\ell\mid a}\ell^{v_\ell(a)}=a$ and [F4] gives arithmetic exponent $\ell$ for a uniformizer. But $a>0$ is killed by the rational finite Artin map by step 1.1. Thus $\operatorname{art}_{\mathbb Q}(v)$ acts with the inverse exponent, namely $a\bmod n=u\bmod n$. Step 2.1 gives the same action for $u$. As this holds for every $n$, the cyclotomic character of $\operatorname{art}_{\mathbb Q}(u)$ is exactly $u\in\widehat{\mathbb Z}^{\times}$. This proof uses only continuity to choose the local kernels and does not assume an explicit cyclotomic conductor formula or Kronecker–Weber. [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 Decompose $t=q(t)u(t)$ by step 1.1. That step, step 3.1 and step 1.2 give $u(t)\bmod n=\chi_{\mathrm{cyc}}(\sigma)\bmod n$ for every $n\ge1$. Equality in the inverse limit $\widehat{\mathbb Z}^{\times}$ gives $u(t)=\chi_{\mathrm{cyc}}(\sigma)$. Thus $N_{F/\mathbb Q}(s)=q(t)\chi_{\mathrm{cyc}}(\sigma)$ with precisely the positive rational product asserted in the Statement. Uniqueness is the uniqueness of step 1.1. This includes $s=1$, norm valuation zero at every prime, and principal ideles, without changing either Frobenius convention. [step 1.1, step 3.1, step 1.2, algebra] ∎

## Source-reading boundary

Milne2007 Lemmas3.4–3.5, printed21, were actually read in full. Lemma3.4 is an exercise there, and Lemma3.5 refers to class-field theory and a rational Artin-kernel description. The proof above reconstructs the needed cyclotomic unit action and rational kernel implication from the actual ready local norm/global Artin interfaces and the published elementary cyclotomic Frobenius lemma. It imports neither the full Kronecker–Weber theorem nor a CM idelic-kernel structure, Hasse norm principle or ray-class existence theorem. No coverage of the adjacent deep kernel lemma is claimed.
