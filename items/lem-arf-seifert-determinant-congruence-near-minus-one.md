---
id: lem-arf-seifert-determinant-congruence-near-minus-one
kind: lemma
title: "The Seifert determinant detects Arf parity near minus one"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 15
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-knot-arf-invariant-from-seifert-form
  - lem-arf-quadratic-enhancement-from-seifert-form
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - def-seifert-s-equivalence-and-conway-normalization
  - lem-conway-polynomial-from-seifert-determinant
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - cor-knot-alexander-normalization-symmetry-and-genus-bound
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf"
      locator: "§§3–5, pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected."
    - title: "W. B. Raymond Lickorish, An Introduction to Knot Theory, Graduate Texts in Mathematics 175, Springer (1997)"
      url: "https://link.springer.com/chapter/10.1007/978-1-4612-0691-0_11"
      locator: "Printed Chapter 10, Definition 10.3, Proposition 10.4 and Theorem 10.7, printed pp. 105–108; complete argument read in full-text PDF copy; publisher chapter record inspected."
---
## Statement

Assume full AC. Let $K$ be a smooth oriented knot of genus $g$, let $V$ be a Seifert matrix in an integral symplectic basis, and let $\Delta_K^\#(t)$ be the unique symmetric Alexander normalization with $\Delta_K^\#(1)=1$. In the quotient ring $\mathbb F_2[t,t^{-1}]/(1+t)^4$,
$$\Delta_K^\#(t)=1+\operatorname{Arf}(K)\frac{(1+t)^2}{t}.$$

## Statement references

[[def-knot-arf-invariant-from-seifert-form|The Seifert quadratic Arf invariant]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[def-seifert-s-equivalence-and-conway-normalization|The symmetric Alexander and Conway normalization]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot, a genus-$g$ Seifert surface, and its positive-push Seifert matrix $V$.

[A1] Full AC supplies the Seifert pairing and Alexander conventions. [[def-axiom-of-choice]]

[F1] $V-V^T$ is the standard integral symplectic intersection matrix in a handle basis, and changes of integral symplectic basis preserve the Arf value. [[lem-seifert-matrix-skew-part-is-surface-intersection]], [[lem-arf-quadratic-enhancement-from-seifert-form]]

[F2] In a symplectic basis, $\operatorname{Arf}(K)=\sum_i v_{2i-1,2i-1}v_{2i,2i}\pmod2$, equivalently $\sum_{x\in H_1(F;\mathbb F_2)}(-1)^{q_F(x)}=2^g(-1)^{\operatorname{Arf}(K)}$. [[def-knot-arf-invariant-from-seifert-form]], [[lem-arf-quadratic-enhancement-from-seifert-form]]

[F3] The determinant $\det(uV-u^{-1}V^T)$ is $\nabla_K(u-u^{-1})=\Delta_K^\#(u^2)$. [[lem-conway-polynomial-from-seifert-determinant]], [[def-seifert-s-equivalence-and-conway-normalization]]

[F4] $\det(V-V^T)=1$ in a positively oriented symplectic basis, so the centered determinant is the unique normalized symmetric Alexander generator. [[thm-seifert-determinant-is-the-knot-alexander-polynomial]], [[cor-knot-alexander-normalization-symmetry-and-genus-bound]]

## Proof

1.1 If $g=0$, the matrix and homology group are empty, $\Delta_K^\#=1$, and $\operatorname{Arf}(K)=0$, so the congruence holds. Assume $g\ge1$. Choose a symplectic integral basis and, in each pair, arrange $v_{2i-1,2i}\equiv1$ and $v_{2i,2i-1}\equiv0\pmod2$. This is possible because their difference is $1$; if the odd entry is in the reverse position, replace $(a_i,b_i)$ by $(b_i,-a_i)$, which keeps $a_i\cdot b_i=1$. Let $A(t)=V^T-tV$. For indices $r,s$ in a paired position, its entries modulo two are $a_{2i,2i-1}=1$ and $a_{2i-1,2i}=t$; for every other position $a_{rs}=(1+t)v_{rs}$. The diagonal case is included, as $(1-t)v_{rr}=(1+t)v_{rr}$ modulo two. [A1, F1, given, construct, algebra]

2.1 Let $B$ be the symmetric matrix over $\mathbb F_2$ with $B_{2i-1,2i}=B_{2i,2i-1}=1$ and all other entries $B_{rs}=v_{rs}$. For a permutation $\phi$ of $\{1,\ldots,2g\}$, let $\alpha$ count the indices $i$ for which $\phi(2i)=2i-1$, and let $\beta$ count those for which $\phi(2i-1)=2i$. Grouping the determinant expansion by these two counts gives $$\det A(t)=\sum_{\alpha,\beta=0}^{g}\epsilon_{\alpha\beta}(1+t)^{2g-\alpha-\beta}t^\beta\pmod2,$$ where $\epsilon_{\alpha\beta}$ is the sum of $\prod_r B_{r,\phi(r)}$ over permutations with those counts. Inversion $\phi\mapsto\phi^{-1}$ preserves the product because $B=B^T$ and swaps $\alpha,\beta$, so $\epsilon_{\alpha\beta}=\epsilon_{\beta\alpha}$. There is one permutation with $\alpha=\beta=g$, the product of the $g$ within-pair transpositions, hence $\epsilon_{gg}=1$. There is no permutation with $(\alpha,\beta)=(g,g-1)$: if every even row occupies its paired odd column, then every odd row must occupy its paired even column; one exception would leave one even column empty. Symmetry gives $\epsilon_{g-1,g}=0$. For $(g-1,g-1)$, inversion pairs equal-weight terms and cancels them modulo two unless the permutation is its own inverse. The fixed permutations must have every pair transposed except one pair fixed pointwise; any cross-pair exchange would make at least two pairs exceptional. Therefore $$\epsilon_{g-1,g-1}=\sum_{i=1}^g v_{2i-1,2i-1}v_{2i,2i}=\operatorname{Arf}(K)\pmod2$$ by [F2], since the diagonal entries are $q_F(a_i)$ and $q_F(b_i)$. The finite Gauss sum in [F2] is $2^g$ times $(-1)$ to this same parity, so it identifies the determinant coefficient as the Arf sign used in the Conway comparison below. [F1, F2, step 1.1, algebra]

3.1 In the expansion of step 2.1, terms with $2g-\alpha-\beta\ge4$ vanish modulo $(1+t)^4$. For exponent $0$, only $(\alpha,\beta)=(g,g)$ remains, giving $t^g$. For exponent $1$, the only two terms are the symmetric pair $(g,g-1)$ and $(g-1,g)$, whose coefficient is zero. For exponent $2$, the diagonal term is $\operatorname{Arf}(K)(1+t)^2t^{g-1}$; the off-diagonal pair $(g,g-2),(g-2,g)$ is divisible by $(1+t)^4$, since $t^2+1=(1+t)^2$ modulo two. For exponent $3$, symmetry pairs each term with its transpose, and $t^a+t^b$ is divisible by $1+t$, so each paired sum is divisible by $(1+t)^4$. Hence $$\det(V^T-tV)=t^g+\operatorname{Arf}(K)(1+t)^2t^{g-1}\pmod{(2,(1+t)^4)}.$$ By [F3], and with the normalization fixed by [F4], multiply by $t^{-g}$ to obtain the asserted congruence for $\Delta_K^\#(t)$. [F1, F2, F3, F4, step 2.1, algebra] ∎

