---
id: thm-universal-property-and-pbw-character-of-kac-moody-verma-modules
kind: theorem
title: Universal property and pbw character of kac moody verma modules
status: draft
origin: pipeline
deps: [def-kac-moody-verma-module, lem-pbw-for-countably-presented-kac-moody-lie-algebras, prop-kac-moody-root-spaces-are-finite-dimensional, def-kac-moody-category-o, def-kac-moody-algebra-associated-to-a-gcm]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Statement

For a finite generalized Cartan matrix over $\mathbb C$ and any $\lambda\in\mathfrak h^*$, the module $M_A(\lambda)$ represents a specified highest vector of weight $\lambda$: for every $\mathfrak g(A)$-module $V$ and vector $v\in V$ with $hv=\lambda(h)v$ and $\mathfrak n^+v=0$, there is exactly one module map $M_A(\lambda)\to V$ sending $1\otimes1$ to $v$. The image is $U(\mathfrak g)v$.

The Verma module belongs to $\mathcal O$, is nonzero, and has formal character

$$\operatorname{ch}M_A(\lambda)=e^\lambda\prod_{\alpha\in\Delta^+}(1-e^{-\alpha})^{-\dim\mathfrak g_\alpha}.$$

Here the character is the coefficient function assigning $\dim M_\mu$ to the symbol $e^\mu$, and the product means coefficientwise multiplication of geometric series. Each coefficient involves finitely many terms; no analytic convergence is asserted.

## Facts & Assumptions

**Given:** The finite GCM, its minimal realization and $\lambda$.

[F1] The Verma module is the Borel-induced tensor quotient, with the negative-then-Borel PBW decomposition ([[def-kac-moody-verma-module]]).

[F2] Ordered PBW monomials are independent, and canonical homogeneous bases of the countably presented root spaces are available without AC ([[lem-pbw-for-countably-presented-kac-moody-lie-algebras]]).

[F3] Roots have one sign and each root space is finite dimensional ([[prop-kac-moody-root-spaces-are-finite-dimensional]]).

[F4] Category $\mathcal O$ means finite-dimensional weight spaces in finitely many downward cones ([[def-kac-moody-category-o]]).

[F5] The sign-changing involution descends to $\mathfrak g(A)$ ([[def-kac-moody-algebra-associated-to-a-gcm]]).

## Proof

1.1 Define $u\otimes c\mapsto c\,uv$. For $a\in U(\mathfrak b)$ the defining highest-vector relations give $av$ equal to the action of $a$ on $\mathbb C_\lambda$ times $v$. Hence the tensor relation $ua\otimes c=u\otimes ac$ is respected, and the map is $\mathfrak g$-linear. The vector $1\otimes1$ generates the induced module, so its image determines the map uniquely; its image is precisely $U(\mathfrak g)v$. This includes $v=0$. [F1, given]

1.2 By F1 and F2, $M_A(\lambda)$ has basis all ordered monomials in a homogeneous basis of $\mathfrak n^-$ applied to $1\otimes1$, including the empty monomial. A monomial of negative degree $-\beta$ has weight $\lambda-\beta$. The sign-changing involution in F5 sends $\mathfrak g_\alpha$ isomorphically onto $\mathfrak g_{-\alpha}$: it sends $h$ to $-h$, so applying it to $[h,x]=\alpha(h)x$ reverses the weight. Thus their dimensions agree. [F1, F2, F3, F5, given]

2.1 Fix $\beta=\sum_i b_i\alpha_i\in Q^+$. Only negative basis vectors whose opposite root has coordinates between $0$ and the $b_i$ can occur in a monomial of degree $-\beta$. There are finitely many such integer tuples and finitely many basis vectors at each by F3. Each has positive height, so its exponent is at most $\sum_i b_i$. Consequently only finitely many monomials have that degree. For $\beta=0$ only the empty monomial occurs, giving top coefficient one. Weights outside $\lambda-Q^+$ have coefficient zero. This proves nonzero and $\mathcal O$ membership by F4. [F3, F4, step 1.2]

3.1 For each individual negative basis vector of degree $-\alpha$, counting its possible exponent contributes $\sum_{m\geq0}e^{-m\alpha}=(1-e^{-\alpha})^{-1}$ as a formal geometric series. For any fixed $\beta$, step 2.1 reduces their product to finitely many factors and finitely many exponent choices. The ordered PBW basis makes each such choice exactly one basis monomial; multiplying by $e^\lambda$ therefore gives its actual weight multiplicity. There are $\dim\mathfrak g_\alpha$ factors at each root by 1.2, proving the displayed formula. Empty root sets give the empty product $1$; no choice is required beyond the fixed homogeneous-basis construction in F2. [F2, step 1.2, step 2.1] ∎
