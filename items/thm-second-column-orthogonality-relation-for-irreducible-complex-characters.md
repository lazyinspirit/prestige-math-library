---
id: thm-second-column-orthogonality-relation-for-irreducible-complex-characters
kind: theorem
title: "The second orthogonality relation for irreducible complex characters"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-inner-product-on-complex-class-functions, thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 3.4.4"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.9"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Statement

Let $G$ be a finite group with irreducible complex characters
$\chi_1,\dots,\chi_r$. For $g,h\in G$,

$$\sum_{i=1}^{r}\chi_i(g)\,\overline{\chi_i(h)}=\begin{cases}|C_G(g)|,&h\in\operatorname{Cl}_G(g),\\0,&h\notin\operatorname{Cl}_G(g).\end{cases}$$

## Facts & Assumptions

**Given:** A finite group $G$, its irreducible characters $\chi_1,\dots, \chi_r$, and elements $g,h\in G$.

[F1] The irreducible characters form an orthonormal basis of the class functions $\mathrm{cf}(G)$ ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).

[F2] The inner product of class functions is $\langle\varphi,\psi\rangle=\frac{1}{|G|}\sum_x\varphi(x)\overline{\psi(x)}$ ([[def-standard-inner-product-on-complex-class-functions]]).

[A1] The indicator function $\delta_g$ of the conjugacy class of $g$, defined by $\delta_g(x)=1$ for $x\in\operatorname{Cl}_G(g)$ and $\delta_g(x)=0$ otherwise, is a class function, and its class has $\bigl|\operatorname{Cl}_G(g)\bigr|=|G|/|C_G(g)|$ elements.

[A2] If $f=\sum_ic_i\chi_i$ in the orthonormal basis of [F1], then $c_i=\langle f,\chi_i\rangle$.

## Proof

**Proof technique:** direct.

1.1 The function $\delta_g$ of [A1] is a class function, so by [F1] it expands as $\delta_g=\sum_ic_i\chi_i$ with $c_i=\langle\delta_g,\chi_i\rangle$ by [A2]. [F1, A1, A2, given]

1.2 By [F2], $\langle\delta_g,\chi_i\rangle=\frac{1}{|G|}\sum_x \delta_g(x)\overline{\chi_i(x)}$. By [A1] the only nonzero terms are at $x\in\operatorname{Cl}_G(g)$, where $\delta_g(x)=1$ and $\overline{\chi_i(x)}=\overline{\chi_i(g)}$ because characters are class functions. Hence $c_i=\frac{|G|/|C_G(g)|}{|G|}\overline{\chi_i(g)} =\overline{\chi_i(g)}/|C_G(g)|$. [F2, A1, given, algebra]

2.1 Evaluating the expansion of step 1.1 at $h$ and substituting the coefficients of step 1.2 gives $\delta_g(h)=\frac{1}{|C_G(g)|}\sum_i\overline{\chi_i(g)}\chi_i(h)$. [step 1.1, step 1.2, algebra]

3.1 By [A1], $\delta_g(h)=1$ exactly when $h\in\operatorname{Cl}_G(g)$, and $0$ otherwise. Multiplying the identity of step 2.1 by $|C_G(g)|$ and taking complex conjugates gives $\sum_i\chi_i(g)\overline{\chi_i(h)}=|C_G(g)|\delta_g(h)$, which is the stated formula. [A1, step 2.1, algebra] ∎
