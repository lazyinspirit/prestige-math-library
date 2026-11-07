---
dependency_level: 1
id: lem-reversal-invariant-cf-block-frostman-measure
kind: lemma
title: "Reversal-invariant continued-fraction block Frostman measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-finite-alphabet-cf-cylinder-pressure-and-separation
  - thm-caratheodory-extension-theorem
  - thm-dynkin-pi-lambda
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Queffélec–Ramaré, Analyse de Fourier des fractions continues à quotients restreints"
      url: "https://ramare-olivier.github.io/Maths/kaufmanbis.pdf"
      locator: "§§2–3, finite good blocks and measure construction; finite-alphabet extension and uniform growth are explicit here"
---

## Statement

Assume Countable Choice. Let $A\subset\mathbb N_{\ge1}$ be finite, let $N=\max A$, let $0<d<1$, and suppose some word length $m$ has $\sum_{w\in A^m}q(w)^{-2d}\ge8$. For every $0<\epsilon<1/100$ there are a block length $J_0$, $\sigma>0$, and a Borel probability $\mu$ supported on $F(A)$ with the following properties.

Every digit prefix $w$ has $\mu([w])\le Cq(w)^{-2d}$, and every interval $I$ of length at most1 has $\mu(I)\le C|I|^d$. At each length $J=kJ_0$ with integer $k\ge1$, the finite prefix law $\rho_k$ is invariant under reversal and, on its support, with $Q=\exp(J\sigma)$,
$$Q^{1-2\epsilon}\le q_J\le Q^{1+2\epsilon},\qquad q_J/(N+1)\le q_{J-1}\le q_J.$$
The tail after these $J$ digits is independent of the prefix and has the same law $\mu$. In particular $\int H\,d\mu=\sum_w\rho_k(w)\int H(T_w(t))\,d\mu(t)$ for every continuous $H$ on $[0,1]$. Constants may depend on $A,d,\epsilon$ but not on $k$.

## Statement references

[Queffélec–Ramaré, §§2–3](https://ramare-olivier.github.io/Maths/kaufmanbis.pdf) — reversal-symmetric finite blocks and Frostman measure.

## Facts & Assumptions

**Given:** Countable Choice and $A,N,d,\epsilon$ with the finite-word pressure hypothesis. Prefix brackets refer to digit cylinders, not unrestricted real intervals.

[F1] Continuants satisfy $q(v)q(w)\le q(vw)\le2q(v)q(w)$, reversal preserves $q$, $q(w)\ge F_{|w|+1}$, and different next digits after prefix $w$ are separated by at least $c_Nq(w)^{-2}$. The finite-alphabet coding map is continuous with compact image. [[lem-finite-alphabet-cf-cylinder-pressure-and-separation]]

[F2] Under Countable Choice, a finite premeasure on an algebra extends to a measure on its generated sigma-algebra. [[thm-caratheodory-extension-theorem]]

[F3] Equality on a generating pi-system extends to equality of finite measures on its generated sigma-algebra. [[thm-dynkin-pi-lambda]]

[A1] Countable Choice is assumed for the conditional Lie, integration, measure or dimension suppliers actually invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** finite conditioning, explicit finite-alphabet extension and cylinder separation.

1.1 If $S_m=\sum_{A^m}q(w)^{-2d}\ge8$, F1 gives $S_{km}\ge2^{-2d(k-1)}S_m^k$, so the pressure condition persists at arbitrarily large lengths. Choose such a length $m$ large enough that $\log F_{m+1}\ge16\log2/\epsilon$. Give $w\in A^m$ probability $\pi(w)=q(w)^{-2d}/S_m$ and define $m\sigma=\sum_w\pi(w)\log q(w)>0$. Then $m\sigma\ge\log F_{m+1}$, and all quantities are finite. [F1, given, construct]

2.1 In the finite product of $j_0$ copies of this finite probability space, put $X_i=\log q(w_i)$. Independence gives variance $j_0V$ for their sum, where $V$ is the finite one-block variance. The elementary bound $\mathbb P(|\sum_iX_i-j_0m\sigma|>\epsilon j_0m\sigma/4)\le16V/(\epsilon^2j_0m^2\sigma^2)$ follows by summing the pointwise squared-deviation inequality over this finite space. Choose $j_0$ so this bound is less than1/2. Condition on the complementary good event and call its law on length-$J_0=j_0m$ words $\nu$. Reversing such a word reverses the order of its $m$-blocks and reverses each block; it preserves all $q(w_i)$, their product probabilities and the event. Thus $\nu$ is reversal invariant. [step 1.1, F1, algebra, construct]

3.1 Let $\mathcal B$ be the finite ordered alphabet of good $J_0$-words with positive $\nu$ mass. On the algebra of finite unions of prefix cylinders in $\mathcal B^{\mathbb N}$ give a cylinder $(b_1,\ldots,b_k)$ mass $\prod_i\nu(b_i)$. Refinement to a common finite length proves consistency and finite additivity. This law is a premeasure: if a decreasing sequence of nonempty clopen algebra sets had empty intersection, call a prefix viable if it extends to a point of every set in the decreasing sequence. The empty prefix is viable. A viable prefix has a viable child: otherwise each of its finitely many children fails some constraint, and taking the largest of those finitely many constraint indices contradicts viability. Recursively choose the least viable child. For each constraint, a long enough prefix determines membership in it, and viability forces that membership. The resulting branch belongs to every set, contradicting empty intersection. Therefore a decreasing sequence in this algebra with empty intersection is eventually empty. For a disjoint algebra decomposition whose union is again in the algebra, its residual sets form such a decreasing sequence; finite additivity then gives countable additivity. This argument uses determined recursion on a finite ordered alphabet, not Dependent Choice or arbitrary-product Choice. [step 2.1, construct]

4.1 F2 extends this finite premeasure to the cylinder sigma-algebra, which is Borel because the finite-prefix cylinders are a countable topological basis. Push it forward under continued-fraction evaluation to obtain $\mu$ on $F(A)$. Its finite prefix products show that after any $k$ full blocks the tail law is the same and is independent of the prefix, first on cylinders, then on all Borel sets by F3. Finite prefix reversal follows from reversal of each block and reversal of the product order. Integrating continuous functions gives the displayed prefix-tail formula. [F1, F2, F3, step 3.1, A1]

5.1 For each good $J_0$-word the sum of its elementary log denominators lies within $\epsilon J_0\sigma/4$ of $J_0\sigma$. F1 puts its actual log denominator between that sum and that sum plus $(j_0-1)\log2$. Concatenating $k$ such words adds at most $(k-1)\log2$. Since $m\sigma\ge16\log2/\epsilon$, the total added amount is at most $k(j_0+1)\log2\le\epsilon kJ_0\sigma/8$. These bounds are stronger than $|\log q_J-J\sigma|\le2\epsilon J\sigma$, proving the asserted powers of $Q$. The last digit recurrence gives $q_J\le(N+1)q_{J-1}$ and $q_{J-1}\le q_J$. No simultaneous weak-law event at infinitely many lengths is assumed. [F1, step 1.1, step 2.1, step 4.1, algebra]

5.2 At a prefix consisting of $k$ good blocks, let $\lambda=kj_0$ be its number of elementary $m$-words. Conditioning costs at most $2^k$, so its mass is at most $2^kS_m^{-\lambda}\prod_iq(w_i)^{-2d}$. Since $q(w_1\cdots w_\lambda)\le2^{\lambda-1}\prod_iq(w_i)$, this is at most $[2^{2d+1/j_0}/S_m]^\lambda q(w_1\cdots w_\lambda)^{-2d}\le q(w_1\cdots w_\lambda)^{-2d}$, using $d<1,S_m\ge8$. For a prefix of arbitrary length discard its final fewer than $J_0$ digits. The remaining full-block prefix has mass at least the given prefix's mass, and its denominator differs by a factor bounded in terms of $N,J_0$ by F1 and the finite remaining-word set. Absorb this factor into $C$. Prefixes of length less than $J_0$ satisfy the same bound after increasing $C$. [F1, step 2.1, step 4.1, algebra]

6.1 Each atom has zero mass by step 5.2 and the Fibonacci denominator growth. If $I$ meets the support in at most one point, its mass is therefore zero. Otherwise its support points have a maximal common prefix $w$; if they had common prefixes of every length they would be the same point by the vanishing cylinder diameters. At the next digit two points differ. F1 gives $|I|\ge c_Nq(w)^{-2}$, whereas all its support lies in $[w]$. Step 5.2 yields $\mu(I)\le Cq(w)^{-2d}\le Cc_N^{-d}|I|^d$. The empty common prefix gives $q=1$ and the same inequality. This proves the Frostman bound without claiming that every sufficiently short interval lies in a nontrivial cylinder. [F1, step 5.2, algebra] ∎

