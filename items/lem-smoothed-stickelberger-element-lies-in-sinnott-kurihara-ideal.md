---
id: lem-smoothed-stickelberger-element-lies-in-sinnott-kurihara-ideal
kind: lemma
title: "The smoothed Stickelberger element lies in the Sinnott–Kurihara ideal"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-smoothed-stickelberger-element-for-abelian-cm-extension
  - def-sinnott-kurihara-ideal-for-a-cm-extension
  - lem-character-orthogonality-for-finite-abelian-groups
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Samit Dasgupta and Mahesh Kakde, On the Brumer–Stark Conjecture"
      url: "https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf"
      locator: "§1.1, printed p. 7, equation (7): the factorization of Θ_{S,T}# by the ramified Euler factors."
verification: {}
---

## Statement

Let $H/F$ be a finite abelian extension of number fields such that $F$ is totally real and $H$ is a totally imaginary quadratic extension of $F$, and let $G=\operatorname{Gal}(H/F)$. Let $S_\infty$ be the infinite places of $F$, let $S_{\mathrm{ram}}$ be the finite primes of $F$ ramified in $H$, and let $T$ be a finite set of finite primes disjoint from $S_\infty\cup S_{\mathrm{ram}}$. Suppose the base Stickelberger element $\Theta_{S_\infty,T}^{H/F}$ is in $\mathbb Q[G]$. For every finite set $S\supseteq S_\infty\cup S_{\mathrm{ram}}$ disjoint from $T$, the element $\Theta_{S,T}^{H/F\,\#}$ belongs to the minus Sinnott–Kurihara fractional ideal $\operatorname{SKu}_T(H/F)^-$.

## Statement references

[[def-smoothed-stickelberger-element-for-abelian-cm-extension]]

[[def-sinnott-kurihara-ideal-for-a-cm-extension]]

[Dasgupta and Kakde — §1.1, printed p. 7, equation (7)](https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf)

## Facts & Assumptions

**Given:** The data in the Statement and the rationality hypothesis $\Theta_{S_\infty,T}^{H/F}\in\mathbb Q[G]$.

[F1] Character interpolation is normalized by $\chi(\Theta_{S,T}^{H/F\,\#})=L_{S,T}(\chi,0)$, and adding a finite prime $v$ to $S$ multiplies this value by its S-depletion factor. [[def-smoothed-stickelberger-element-for-abelian-cm-extension]]

[F2] For a ramified prime $v$, $e_v=|I_v|^{-1}\sum_{\tau\in I_v}\tau$, and $\operatorname{SKu}_T$ contains the factor ideal $(N I_v,1-\sigma_v e_v)$; the Frobenius product is independent of its representative. [[def-sinnott-kurihara-ideal-for-a-cm-extension]]

[F3] The characters of a finite abelian group separate elements of $\mathbb C[G]$. [[lem-character-orthogonality-for-finite-abelian-groups]]

## Proof

**Proof technique:** direct.

**Given:** The data and facts above.

1.1 For a finite prime $v\in S\setminus S_\infty$, a character $\chi$ trivial on $I_v$ has $\chi(e_v)=1$ and $\chi(\sigma_v e_v)=\chi(\operatorname{Frob}_v)$; if $\chi$ is nontrivial on $I_v$, its sum over $I_v$ is zero, so $\chi(e_v)=\chi(\sigma_v e_v)=0$. Thus $\chi(1-\sigma_v e_v)$ is exactly the S-depletion factor at $s=0$ for every $\chi$. [F1, F2, algebra]

2.1 Multiplying the factor identities from step 1.1 over $v\in S\setminus S_\infty$ gives $$\chi\!\left(\Theta_{S_\infty,T}^{H/F\,\#}\prod_{v\in S\setminus S_\infty}(1-\sigma_v e_v)\right)=\chi(\Theta_{S,T}^{H/F\,\#})$$ for every $\chi\in\widehat G$. By [F3], these character values determine the group-ring element, so the two elements are equal. [F1, F3, step 1.1, algebra]

3.1 For every $v\in S_{\mathrm{ram}}$, the factor $1-\sigma_v e_v$ is one of the generators of the corresponding fractional $\mathbb Z[G]$-module in $\operatorname{SKu}_T(H/F)$. Each additional unramified prime in $S\setminus(S_\infty\cup S_{\mathrm{ram}})$ contributes an element of $\mathbb Z[G]$ multiplying the base generator. The equality in step 2.1 therefore places $\Theta_{S,T}^{H/F\,\#}$ in $\operatorname{SKu}_T(H/F)$; projection to the minus component gives the stated membership. [F2, step 2.1, algebra] ∎

## Lemma references

[[def-smoothed-stickelberger-element-for-abelian-cm-extension]]

[[def-sinnott-kurihara-ideal-for-a-cm-extension]]

[Dasgupta and Kakde — §1.1, printed p. 7, equation (7)](https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf)
