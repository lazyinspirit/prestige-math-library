---
id: thm-littlewood-richardson-tensor-product-rule
kind: theorem
title: The Littlewood--Richardson tensor-product rule
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
proof_strategy: direct
deps:
  - def-stable-schur-function-by-bialternants
  - def-axiom-of-choice
  - lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux
  - prop-semistandard-tableaux-expand-schur-characters
  - def-schur-module-and-schur-polynomial-character
  - def-littlewood-richardson-tableau-and-coefficient
  - def-polynomial-glr-highest-weights-as-partitions
  - thm-schur-weyl-decomposition-with-length-cutoff
  - def-commuting-symmetric-and-linear-actions-on-tensor-power
  - def-partition-young-diagram-and-conjugate-partition
  - lem-highest-weight-modules-have-weights-below-the-top-weight
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. R. Stembridge, A Concise Proof of the Littlewood--Richardson Rule, Electronic Journal of Combinatorics 9 (2002), #N5, 4 pp."
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/download/v9i1n5/pdf"
      locator: "Printed pp. 1--4; the introduction states that the Littlewood--Richardson rule for Schur functions is the tensor-product rule for $GL_n(\\mathbb C)$, and the corollary on printed p. 3 expresses $s_\\lambda s_\\mu$ as the sum over admissible tableaux."
    - title: "T. Seynnaeve, Representation Theory (lecture notes, Bern)"
      url: "https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf"
      locator: "Ch. 11 Theorems 11.6--11.8, printed pp. 54--56 (Schur modules, character, irreducibility and highest weights) and Ch. 9 Remarks 9.4--9.6, printed pp. 51--52 (polynomial representations, rank bound)."
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 9 §9.3.5, printed pp. 418--421: the Littlewood--Richardson rule as the tensor-product decomposition of $GL(n,\\mathbb C)$-modules, with the worked examples."
---

## Statement

Assume the Axiom of Choice. Let $V=\mathbb C^r$, $r\ge1$, and let
$\lambda,\mu$ be partitions with $\ell(\lambda),\ell(\mu)\le r$. Then
$$S_\lambda(V)\otimes S_\mu(V)\cong\bigoplus_{\nu:\,\ell(\nu)\le r}S_\nu(V)^{\oplus c^\nu_{\lambda\mu}},$$
the finite direct sum over partitions $\nu$ with at most $r$ rows, where
$c^\nu_{\lambda\mu}$ is the Littlewood--Richardson coefficient of
[[def-littlewood-richardson-tableau-and-coefficient]]; $c^\nu_{\lambda\mu}=0$
unless $\lambda\subseteq\nu$ and $|\nu|=|\lambda|+|\mu|$. Equivalently in
characters
$$s_\lambda(x_1,\dots,x_r)\,s_\mu(x_1,\dots,x_r)=\sum_{\nu:\,\ell(\nu)\le r}c^\nu_{\lambda\mu}\,s_\nu(x_1,\dots,x_r),$$
with $s_\nu(x_1,\dots,x_r)=0$ for $\ell(\nu)>r$
([[def-stable-schur-function-by-bialternants]]); the coefficients
$c^\nu_{\lambda\mu}$ do not depend on $r$.

## Facts & Assumptions

**Given:** AC, $V=\mathbb C^r$, partitions $\lambda,\mu$ with $\ell(\lambda),\ell(\mu)\le r$, and the tensor product $S_\lambda(V)\otimes S_\mu(V)$ with its $\operatorname{GL}(V)$-action.

[F1] The modules $S_\nu(V)$ with $\ell(\nu)\le r$ are nonzero pairwise non-isomorphic irreducible polynomial $\operatorname{GL}(V)$-modules with characters $s_\nu(x_1,\dots,x_r)$, and $S_\nu(V)=0$ for $\ell(\nu)>r$; distinct Schur characters $s_\nu$, $\ell(\nu)\le r$, are linearly independent ([[def-schur-module-and-schur-polynomial-character]], [[prop-semistandard-tableaux-expand-schur-characters]], [[thm-schur-weyl-decomposition-with-length-cutoff]] parts (2) and (3), [[def-polynomial-glr-highest-weights-as-partitions]]).

[F2] The tensor product $S_\lambda(V)\otimes S_\mu(V)$ is a polynomial $\operatorname{GL}(V)$-module of finite length whose character is $s_\lambda s_\mu$, and the multiplicity of $S_\nu(V)$ in it equals $c^\nu_{\lambda\mu}$ for every $\nu$ with $\ell(\nu)\le r$ ([[lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux]], [[def-schur-module-and-schur-polynomial-character]]).

[F3] A skew shape $\nu/\lambda$ is nonempty only if $[\lambda]\subseteq[\nu]$ and $|\nu|>|\lambda|$; a LR tableau of shape $\nu/\lambda$ has content $\mu$ with $|\mu|=|\nu|-|\lambda|$, so $c^\nu_{\lambda\mu}=0$ unless $\lambda\subseteq\nu$ and $|\nu|=|\lambda|+|\mu|$ ([[def-littlewood-richardson-tableau-and-coefficient]], [[def-partition-young-diagram-and-conjugate-partition]]).

[F4] Only finitely many partitions have the fixed size $|\lambda|+|\mu|$, since their parts and lengths are bounded by that size; the size condition in [F3] therefore makes the sum finite ([[def-partition-young-diagram-and-conjugate-partition]], [[def-littlewood-richardson-tableau-and-coefficient]]).

## Proof

1.1 Decomposition. By [F2] the multiplicity of $S_\nu(V)$ in $S_\lambda(V)\otimes S_\mu(V)$ equals $c^\nu_{\lambda\mu}$ for every partition $\nu$ with $\ell(\nu)\le r$. The module is completely reducible by the tensor-power retraction proved in the supplier of [F2], and its irreducible summands are among the pairwise non-isomorphic simple modules $S_\nu(V)$ with $\ell(\nu)\le r$ by [F1]; therefore $$S_\lambda(V)\otimes S_\mu(V)\cong\bigoplus_{\nu:\,\ell(\nu)\le r}S_\nu(V)^{\oplus c^\nu_{\lambda\mu}},$$ where the sum is finite by [F4] and the vanishing statement of [F3] removes all $\nu$ with $\lambda\not\subseteq\nu$ or $|\nu|\ne|\lambda|+|\mu|$. [F1, F2, F3, F4, algebra]

2.1 Characters. Taking characters in step 1.1 and using additivity and multiplicativity of the character together with $\operatorname{ch}S_\nu(V)=s_\nu$ [F1] gives $s_\lambda s_\mu=\sum_{\nu:\ell(\nu)\le r}c^\nu_{\lambda\mu}s_\nu(x_1,\dots,x_r)$, where terms with $\ell(\nu)>r$ are $0$ by definition of $s_\nu(x_1,\dots,x_r)$ and $S_\nu(V)=0$. [F1, F2, step 1.1, algebra]

3.1 Independence of $r$. The coefficient of $s_\nu$ in step 2.1 is $c^\nu_{\lambda\mu}$, the number of LR tableaux of shape $\nu/\lambda$ and content $\mu$ ([[def-littlewood-richardson-tableau-and-coefficient]]); this is a count of tableaux of a fixed skew shape and content, so it does not mention the rank $r$ at all, and the multiplicity statement of step 1.1 identifies the same integer as the multiplicity in the tensor product for every $r$ with $\ell(\lambda),\ell(\mu)\le r$. Hence the coefficients $c^\nu_{\lambda\mu}$ appearing in the decomposition are independent of $r$, as claimed. [F1, F2, F3, step 1.1, algebra] ∎
