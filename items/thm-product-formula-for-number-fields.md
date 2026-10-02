---
id: thm-product-formula-for-number-fields
kind: theorem
title: Product formula for a number field
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-algebraic-integer-minimal-polynomial-criterion
  - cor-ring-of-integers-is-a-dedekind-domain
  - def-absolute-norm-of-an-ideal
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-field-of-fractions
  - def-fractional-ideal
  - def-number-field
  - def-prime-ideal-valuations-on-fractional-ideals
  - def-ring-of-integers-of-a-number-field
  - lem-complex-conjugation-and-modulus-laws
  - thm-basic-laws-for-field-norm-and-trace
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-field-norm-and-trace-by-embeddings
  - thm-ideal-norm-is-multiplicative
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-unique-factorisation-of-ideals-in-dedekind-domains
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 7 Theorem 7.15 and Lemma 7.16 pp.112-113 (product formula); Ch. 8 Proposition 8.7 and Theorem 8.8 pp.137-138 (ideal norm)."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§18.1 Theorem 18.1.4 pp.182-183: the product formula."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "p.4: the product formula, with the normalized factors at complex places equal to |x|_C^2 as recorded in §15.2."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a number
field ([[def-number-field]]) with ring of integers $\mathcal O_K$
([[def-ring-of-integers-of-a-number-field]]). Normalize the **absolute values**
of $x\in K^{\times}$ as follows:

- at a nonzero prime ideal $\mathfrak p$ of $\mathcal O_K$, set
  $|x|_{\mathfrak p}=N\mathfrak p^{-v_{\mathfrak p}(x)}$, where
  $v_{\mathfrak p}$ is the prime-ideal valuation
  ([[def-prime-ideal-valuations-on-fractional-ideals]]) and $N\mathfrak p$ is
  the absolute norm ([[def-absolute-norm-of-an-ideal]]);
- at a real embedding $\sigma$, set $|x|_{\sigma}=|\sigma(x)|$;
- at a complex embedding $\tau$, one chosen from each complex conjugate pair,
  set $|x|_{\tau}=|\tau(x)|^{2}$.

Then

$$\prod_v|x|_v=1\qquad\text{for every }x\in K^{\times},$$

the product being taken over the nonzero prime ideals and the chosen real and
complex embeddings; only finitely many factors differ from $1$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ with embeddings $\sigma_1,\dots,\sigma_{r_1}$ and $\tau_1,\dots,\tau_{r_2}$ as in the statement ([[def-archimedean-embeddings-and-number-field-signature]]), and an element $x\in K^{\times}$.

[A1] The Axiom of Choice is assumed for the whole argument; its single use is the Dedekind unique-factorisation route for fractional ideals ([[thm-unique-factorisation-of-ideals-in-dedekind-domains]]), whose statement assumes Choice, applied to ideals of $\mathcal O_K$ ([[cor-ring-of-integers-is-a-dedekind-domain]]).

[F1] Every nonzero fractional ideal of $\mathcal O_K$ has a unique finite factorisation into prime ideals, and an integral ideal has only nonnegative exponents ([[thm-unique-factorisation-of-ideals-in-dedekind-domains]]); the valuation $v_{\mathfrak p}(I)$ is the exponent attached to $\mathfrak p$ ([[def-prime-ideal-valuations-on-fractional-ideals]]).

[F2] For nonzero integral ideals, $N(\mathfrak a\mathfrak b)=N(\mathfrak a)N(\mathfrak b)$, and for $0\ne\alpha\in\mathcal O_K$ one has $N((\alpha))=|N_{K/\mathbb Q}(\alpha)|$ ([[thm-ideal-norm-is-multiplicative]], [[thm-principal-ideal-norm-is-absolute-field-norm]]).

[F3] $N_{K/\mathbb Q}(x)=\prod_{\psi}\psi(x)$, the product being over the $[K:\mathbb Q]$ embeddings $K\to\mathbb C$, and $N_{K/\mathbb Q}(xy)=N_{K/\mathbb Q}(x)N_{K/\mathbb Q}(y)$ with $N_{K/\mathbb Q}(1)=1$ ([[thm-field-norm-and-trace-by-embeddings]], [[thm-basic-laws-for-field-norm-and-trace]]).

[F4] The modulus satisfies $|zw|=|z||w|$ and $z\overline z=|z|^{2}$ for complex numbers ([[lem-complex-conjugation-and-modulus-laws]]); in particular $|\overline z|=|z|$, since $|\overline z|^{2}=\overline z\,\overline{\overline z}=\overline zz=|z|^{2}$ and both sides are nonnegative.

## Proof

**Proof technique:** split the product into its finite and archimedean parts; the finite part is the reciprocal of $|N_{K/\mathbb Q}(x)|$ by unique factorisation and the ideal-norm formulas, and the archimedean part is $|N_{K/\mathbb Q}(x)|$ by the embedding formula for the norm.

1.1 Write $x=a/b$ with $a,b\in\mathcal O_K\setminus\{0\}$. Indeed, $K/\mathbb Q$ is finite so $x$ is algebraic over $\mathbb Q$ and has a monic minimal polynomial $m(X)=X^{d}+c_{d-1}X^{d-1}+\cdots+c_0\in\mathbb Q[X]$ ([[thm-evaluation-kernel-and-minimal-polynomial]]); choose $M\ge1$ with all $M^{j}c_{d-j}\in\mathbb Z$, and set $a=Mx$. Then $a^{d}+Mc_{d-1}a^{d-1}+\cdots+M^{d}c_0=M^{d}m(x)=0$, a monic integer polynomial relation, so $a\in\mathcal O_K$ by the minimal-polynomial criterion ([[cor-algebraic-integer-minimal-polynomial-criterion]]); with $b=M\in\mathbb Z\setminus\{0\}\subseteq\mathcal O_K$ this gives $x=a/b$. [given, algebra]

1.2 For the archimedean factors, [F3] gives $N_{K/\mathbb Q}(x)=\prod_{\psi}\psi(x)$ over all $[K:\mathbb Q]$ embeddings, and the embeddings consist of the $r_1$ real embeddings together with the $r_2$ conjugate pairs $\{\tau_j,\overline{\tau_j}\}$; taking absolute values and using $|zw|=|z||w|$ and $|\overline z|=|z|$ from [F4], $|N_{K/\mathbb Q}(x)|=\prod_{\psi}|\psi(x)|=\bigl(\prod_{i=1}^{r_1}|\sigma_ix|\bigr)\bigl(\prod_{j=1}^{r_2}|\tau_jx|\,\lvert\overline{\tau_jx}\rvert\bigr)=\bigl(\prod_{i=1}^{r_1}|\sigma_ix|\bigr)\bigl(\prod_{j=1}^{r_2}|\tau_jx|^{2}\bigr)$, which is exactly the product of the archimedean normalized absolute values. [F3, F4, given]

2.1 In the language of fractional ideals ([[def-fractional-ideal]], [[def-field-of-fractions]]) one has $(x)=(a)(b)^{-1}$, hence $v_{\mathfrak p}(x)=v_{\mathfrak p}((a))-v_{\mathfrak p}((b))$ for every prime $\mathfrak p$; by [F1] write $(a)=\prod_{\mathfrak p}\mathfrak p^{e_{\mathfrak p}}$ and $(b)=\prod_{\mathfrak p}\mathfrak p^{f_{\mathfrak p}}$ with finite supports, so $v_{\mathfrak p}(x)=e_{\mathfrak p}-f_{\mathfrak p}$ vanishes outside the finite union of those supports and $\prod_{\mathfrak p}N\mathfrak p^{-v_{\mathfrak p}(x)}=\bigl(\prod_{\mathfrak p}N\mathfrak p^{f_{\mathfrak p}}\bigr)\bigl(\prod_{\mathfrak p}N\mathfrak p^{e_{\mathfrak p}}\bigr)^{-1}=N((b))/N((a))=|N_{K/\mathbb Q}(b)|/|N_{K/\mathbb Q}(a)|=1/|N_{K/\mathbb Q}(x)|$, the third equality by [F2] applied to the two finite factorisations and the last by [F3], since $N_{K/\mathbb Q}(a)=N_{K/\mathbb Q}(x)N_{K/\mathbb Q}(b)$. [A1, F1, F2, F3, step 1.1]

3.1 Multiplying the finite product of step 2.1 and the archimedean product of step 1.2 gives $\prod_v|x|_v=\bigl(\prod_{i=1}^{r_1}|\sigma_ix|\bigr)\bigl(\prod_{j=1}^{r_2}|\tau_jx|^{2}\bigr)\bigl(\prod_{\mathfrak p}N\mathfrak p^{-v_{\mathfrak p}(x)}\bigr)=|N_{K/\mathbb Q}(x)|\cdot|N_{K/\mathbb Q}(x)|^{-1}=1$, and only the finitely many primes in the supports of $(a)$ and $(b)$ contribute a finite factor different from $1$, so the product is over a finite set of places; the only Choice in the argument is [A1], the norms, moduli and logarithms being computed without further selection. [A1, step 2.1, step 1.2] ∎
