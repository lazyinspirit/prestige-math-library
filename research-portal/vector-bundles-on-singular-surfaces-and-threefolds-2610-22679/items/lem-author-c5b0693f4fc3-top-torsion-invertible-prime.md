---
id: lem-author-c5b0693f4fc3-top-torsion-invertible-prime
kind: lemma
title: Top-weight degree-five vanishing away from the characteristic
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
  - thm-author-c5b0693f4fc3-top-torsion-artin-affine
  - def-article-conventions
  - math:def-affine-scheme
  - math:def-algebraically-closed-field
  - math:def-axiom-of-choice
  - def-etale-tate-coefficients
  - def-derived-sections-on-sites
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-prime
  - math:def-grothendieck-universe-closure-convention
  - math:def-affine-scheme-spectrum
  - math:def-prime-spectrum-and-vanishing-sets
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:def-krull-dimension-of-a-ring
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  thm-author-c5b0693f4fc3-top-torsion-topweight-comparison: mathematical-premise
  thm-author-c5b0693f4fc3-top-torsion-artin-affine: mathematical-premise
  def-article-conventions: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-etale-tate-coefficients: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
  math:def-prime: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:def-prime-spectrum-and-vanishing-sets: mathematical-premise
  math:thm-irreducible-closed-subsets-and-prime-ideals: mathematical-premise
  math:def-krull-dimension-of-a-ring: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
sources:
  references:
    - title: Elden Elmanto (joint work with Matthew Morrow), Zero cycles on singular
        varieties, Oberwolfach Report 36/2025
      url: https://ems.press/content/serial-article-files/52244
      locator: Printed p. 1994 footnote 1; p. 1995 Theorem 4 and its invertible-prime
        proof paragraph; p. 1996 affine application (PDF pages 46–48,
        one-based).
      statement: The comparison with syntomic cohomology is an equivalence for weight
        at least the dimension. At an invertible prime the syntomic target is
        étale cohomology with the corresponding Tate twist.
      hypotheses: Finite-type scheme over an algebraically closed field; prime
        coefficient; weight at least the dimension. Apply with weight and
        dimension three and an invertible prime.
      reading_limits: For this repair, checked the published PDF extraction at printed
        p. 1994 footnote 1, p. 1995 Theorem 4 and its invertible-prime proof
        paragraph, and p. 1996 affine application. Only the invertible-prime
        comparison is used through its declared supplier. The comparison and
        Artin-vanishing proofs were not reconstructed; no visual inspection or
        scientific acceptance is claimed.
    - title: The Stacks Project, Section 59.95, Cohomological dimension
      url: https://stacks.math.columbia.edu/tag/0F0P
      locator: Definition 59.95.1 and Proposition 59.95.6, statement and opening proof
        paragraph.
      statement: The étale cohomological dimension of an affine finite-type K-scheme
        is at most its dimension plus cd(K); the bound applies to every abelian
        torsion sheaf.
      hypotheses: K is a field and X is affine of finite type over K. Apply over
        algebraically closed k with dimension three and the torsion sheaf mu_ell
        tensor three. No smoothness or reducedness condition.
      reading_limits: For this repair, read the online Definition 59.95.1 and
        Proposition 59.95.6, including the opening proof paragraph. Checked
        affine finite-type scheme scope and arbitrary abelian torsion-sheaf
        coefficients. Used the declared affine-vanishing supplier; did not
        reconstruct the induction or its antecedent proofs.
    - title: J. S. Milne, Lectures on Étale Cohomology, version 2.21 (22 March 2013)
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
      locator: Section 15 opening definition and separably closed field example,
        printed p. 105; Section 16 opening Tate-twist conventions, printed p.
        108 (PDF pages 105 and 108, one-based).
      statement: A separably closed field has étale cohomological dimension zero. Tate
        twists at invertible positive integers are locally constant coefficient
        sheaves.
      hypotheses: Separably closed base field for cd zero; positive integer invertible
        on the scheme for the twists. Apply to algebraically closed k and prime
        ell invertible in k.
      reading_limits: For this repair, read the version 2.21 PDF extraction at the
        definition and separably closed field example in Section 15, printed p.
        105, and the Tate-twist conventions in Section 16, printed p. 108. Only
        the cohomological-dimension-zero and local-constancy statements are used
        as source context. The proof applies the declared affine-vanishing
        supplier directly. No prerequisite proof reconstruction or visual
        inspection is claimed.
formulation_deps:
  - def-article-conventions
  - math:def-affine-scheme
  - math:def-algebraically-closed-field
  - math:def-prime
  - math:def-axiom-of-choice
  - def-motivic-cohomology
  - def-derived-sections-on-sites
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - def-motivic-cohomology
  - thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
  - thm-author-c5b0693f4fc3-top-torsion-artin-affine
  - def-article-conventions
  - math:def-affine-scheme
  - math:def-algebraically-closed-field
  - math:def-axiom-of-choice
  - def-etale-tate-coefficients
  - def-derived-sections-on-sites
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-prime
  - math:def-grothendieck-universe-closure-convention
  - math:def-affine-scheme-spectrum
  - math:def-prime-spectrum-and-vanishing-sets
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:def-krull-dimension-of-a-ring
---

## Statement
Assume the Axiom of Choice and fix compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$. The field and scheme data lie in $U$; sites, coefficient values and ambient derived categories satisfy the fixed compatible size bounds required by the motivic functor, the comparison and the derived global sections used below. Existence of these universes is a separate size assumption. Let $X$ be an affine finite-type scheme of dimension three over an algebraically closed field $k$. Let $\ell$ be a prime integer invertible in $k$, meaning that $\ell\cdot1_k$ is a unit. Then $H^{5,3}_{\rm mot}(X,\mathbb Z/\ell)=0$. Here finite type and scheme dimension have the article conventions: an affine scheme has a finitely generated coordinate $k$-algebra, and dimension is the supremum of lengths of strict chains of irreducible closed subsets of its underlying topological space. No smoothness, reducedness or irreducibility assumption is imposed.

## Statement references
[[def-article-conventions]]

[[math:def-affine-scheme]]

[[math:def-algebraically-closed-field]]

[[math:def-axiom-of-choice]]

[[def-motivic-cohomology]]

[[def-derived-sections-on-sites]]

[[math:def-grothendieck-universe-closure-convention]]

## Facts & Assumptions
[F1] [[def-motivic-cohomology]] defines finite coefficients by the objectwise derived quotient $\mathbb Z(3)_{\rm mot}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/\ell$. [[thm-author-c5b0693f4fc3-top-torsion-topweight-comparison]] identifies this very complex with $R\Gamma_{\acute et}(X,\mu_\ell^{\otimes3})$, because $\ell$ is a prime invertible in $k$ and $3=\dim X$.

[F2] [[thm-author-c5b0693f4fc3-top-torsion-artin-affine]] gives $H^i_{\acute et}(X,\mu_\ell^{\otimes j})=0$ for $i>d$ on affine finite-type schemes $X=\operatorname{Spec}A$ over algebraically closed fields, where $d$ is the Krull dimension of the coordinate ring for nonempty $X$. It requires the stated Choice and derived-section size assumptions, but neither smoothness nor reducedness nor irreducibility. Its stated vanishing applies directly to the Tate twists defined in [F3]; [F5] supplies the dimension convention needed for its application here.

[F3] [[def-etale-tate-coefficients]] defines $\mu_\ell$ as the sheaf of $\ell$th roots of unity and $\mu_\ell^{\otimes3}$ as its third tensor power over the constant ring sheaf $\mathbb Z/\ell$; this sheaf is annihilated by $\ell$. The unit $\ell\cdot1_k$ maps to a unit in every local ring of the $k$-scheme $X$, so the coefficient construction applies. [[def-derived-sections-on-sites]] defines $H^i_{\acute et}(X,F)=H^i(R\Gamma_{\acute et}(X,F))$ for a sheaf $F$ placed in degree zero on the fixed small étale site.

[F4] A prime integer has the meaning of [[math:def-prime]]: it exceeds one and its only positive divisors are one and itself. Under [A1], [[math:cor-affine-scheme-quasi-compact]] and [[math:thm-affine-schemes-quasi-separated]] show that the affine scheme $X$ is quasi-compact and quasi-separated. Thus it is an object of $\mathrm{Sch}_k$ in [[def-article-conventions]], the domain of the motivic complex in [[def-motivic-cohomology]].

[F5] Choose an affine presentation $X\cong\operatorname{Spec}A$ using [[math:def-affine-scheme]], with $A$ a finitely generated commutative $k$-algebra by [[def-article-conventions]]. In [[math:def-affine-scheme-spectrum]], the spectrum has prime ideals as its points, and the zero ring has empty spectrum. Since $\dim X=3$ whereas $\dim\varnothing=-\infty$, $X$ is nonempty and $A\ne0$. For an ideal $J$, put $V(J)=\{\mathfrak p:J\subseteq\mathfrak p\}$, as in [[math:def-prime-spectrum-and-vanishing-sets]]; for a closed subset $Z$ put $I(Z)=\bigcap_{\mathfrak p\in Z}\mathfrak p$. Under [A1], [[math:thm-irreducible-closed-subsets-and-prime-ideals]] supplies $Z=V(I(Z))$ and says that a nonempty closed $Z$ is irreducible exactly when $I(Z)$ is prime. The ring dimension in [[math:def-krull-dimension-of-a-ring]] is the supremum of lengths of strict chains of prime ideals in this nonzero ring. The scheme dimension in [[def-article-conventions]] counts chains of nonempty irreducible closed subsets.

[A1] Assume [[math:def-axiom-of-choice]] and use the nested universes of the Statement with the closure convention of [[math:def-grothendieck-universe-closure-convention]]. Their existence is assumed separately from Choice. Impose the fixed compatible bounds of [[def-motivic-cohomology]] before evaluating its functor or forming its objectwise finite coefficients, and those of [[thm-author-c5b0693f4fc3-top-torsion-topweight-comparison]] before applying the comparison. Choice is inherited through these selected constructions and the K-injective derived-section construction in [[def-derived-sections-on-sites]]. Use the same compatible bounds for the common small étale site in [F1]–[F3], whose objects are étale $X$-schemes and whose covers are jointly surjective étale families, including the open restrictions used by the coefficient construction. These also discharge the Choice and site-size premises of [F2], while Choice discharges the affine compactness and spectrum-correspondence premises in [F4]–[F5].

## Proof
**Given:** $X,k,\ell$ and the Choice and size assumptions as stated.

**Goal:** Prove the vanishing for the supplied motivic theory.

1.1 By [F4] under [A1], the motivic complex in [F1] is defined on $X$ with its required nested-universe bounds. Apply the comparison in [F1] with weight three. Its hypotheses hold since $X$ is finite type over algebraically closed $k$, $\ell$ is a prime invertible in $k$, and $3=\dim X$. Taking degree-five cohomology using [F3] with the same compatible bounds under [A1] gives $H^{5,3}_{\rm mot}(X,\mathbb Z/\ell)\cong H^5_{\acute et}(X,\mu_\ell^{\otimes3})$ for the objectwise finite-coefficient theory in [F1]. [given, F1, F3, F4, A1]

2.1 In the presentation of [F5], for any prime $\mathfrak p$, $V(\mathfrak p)$ is closed since its complement is $\bigcup_{f\in\mathfrak p}D(f)$, with $D(f)=\{\mathfrak q:f\notin\mathfrak q\}$. The set $V(\mathfrak p)$ contains $\mathfrak p$ and every member contains $\mathfrak p$, so $I(V(\mathfrak p))=\mathfrak p$. Thus [F5] gives inverse bijections $\mathfrak p\mapsto V(\mathfrak p)$ and $Z\mapsto I(Z)$ between primes and nonempty irreducible closed subsets. For primes $\mathfrak p,\mathfrak q$, $\mathfrak p\subseteq\mathfrak q$ implies $V(\mathfrak q)\subseteq V(\mathfrak p)$, and the converse follows by testing the point $\mathfrak q\in V(\mathfrak q)$. Hence these bijections reverse strict chains and preserve their lengths. The affine isomorphism preserves closed subsets, inclusions and irreducibility, so the two suprema defining dimension agree: $\dim A=\dim X=3$. Under [A1], apply [F2] to the twist in [F3], with $j=3$, $i=5$ and this ring dimension. Since $5>3$, the right-hand group in step 1.1 vanishes and so does the asserted motivic group. No reducedness or smoothness hypothesis is used. [given, F2, F3, F5, A1, step 1.1] ∎

## External input
The comparison in [F1] is imported through its declared supplier from [Elmanto's report, Theorem 4 and footnote 1](https://ems.press/content/serial-article-files/52244). The affine bound in [F2] is imported through its declared supplier from [Stacks, Proposition 59.95.6](https://stacks.math.columbia.edu/tag/0F0P). [Milne, Sections 15–16](https://www.jmilne.org/math/CourseNotes/LEC.pdf) records cohomological dimension zero for separably closed fields and local constancy of Tate twists when the coefficient integer is invertible on the scheme. Here locally constant means constant after an étale covering. These observations explain the imported affine bound; step 2.1 applies [F2] directly without a separate local-constancy premise. This lemma supplies the local composition at weight three and degree five. Its two-step proof does not reconstruct those substantial inputs; the source reading limits are recorded above.
