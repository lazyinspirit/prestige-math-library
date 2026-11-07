---
id: thm-lower-dimensional-moment-curve-decoupling
kind: theorem
title: Lower-Dimensional Decoupling for Moment-Curve Arcs
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
- def-l2-decoupling-constant-for-moment-curve
- lem-compatible-interval-meshes-for-moment-curve-decoupling
- lem-bandlimited-tools-for-weighted-decoupling
- thm-tonelli-and-fubini-for-completed-product-measures
- thm-complex-holder-minkowski-and-the-quotient-norm
- def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§8, Lemma 8.2, pp. 654–655: a moment-curve arc is decoupled by the lower-dimensional
      constant at its flat scale.'
proof_strategy: direct
axiom_use: Countable Choice is inherited from the Euclidean Lebesgue/Fourier and approximation
  suppliers; no full Axiom of Choice is used.
---

## Statement

Assume Countable Choice. Let $n\ge k\ge3$, $R\ge1$, $p\ge2$, $E\ge100n$, and $\delta=R^{-1/(k-1)}$. Let $I\subset[0,1]$ be an interval of length at least $\delta$, let $B\subset\mathbb R^n$ be any ball of radius $R$, and let $\mathcal P_\delta(I)$ be the canonical step-$\delta$ partition of $I$, starting at its left endpoint and having at most one final shorter interval. For every $g\in L^1([0,1])$,
$$\|E_I^{(n)}g\|_{L^p_\sharp(w_{B,E})}\le C_{n,k,p,E}\,D_{p,k-1}(\delta,E)\left(\sum_{J\in\mathcal P_\delta(I)}\|E_J^{(n)}g\|_{L^p_\sharp(w_{B,E})}^2\right)^{1/2},$$
where $D_{p,k-1}(\delta,E)$ is computed in dimension $k-1$, on balls of radius $\delta^{-(k-1)}=R$.

## Statement references

[Lower-dimensional decoupling constant]([[def-l2-decoupling-constant-for-moment-curve]])

[Moment-curve extension operator]([[def-moment-curve-extension-operator]])

[Polynomially weighted norms]([[def-polynomial-decoupling-weight-and-norm]])

[BDG, Lemma 8.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)


## Facts & Assumptions

**Given:** All hypotheses of the Statement.

[F1] The exact constants and canonical meshes are defined in [[def-l2-decoupling-constant-for-moment-curve]]. Larger-ball and shifted-mesh comparison, homogeneous weighted transfer and completed Tonelli are the other listed proved suppliers.

## Proof

1.1 Put $d=k-1$ and split $x=(x',y)\in\mathbb R^d\times\mathbb R^{n-d}$. For fixed $y$ define $g_y(t)=g(t)\mathbf1_I(t)e(\sum_{l=d+1}^ny_{l-d}t^l)$. It is integrable with norm at most $\|g\|_1$, and $E_I^{(n)}g(x',y)=E^{(d)}g_y(x')$. The higher-coordinate phases have modulus one; the joint integrands are measurable. All integrations below are nonnegative and permitted by completed Tonelli. [given, F1, construct, algebra]

2.1 First prove a local unweighted left inequality. The ball $B(c,R)$ lies in a product of two boxes $Q'\times Q''$ of dimensions $d,n-d$ and sidelength $2R$. Choose a dimension-$d$ ball $B'$ of radius $C_nR$ containing $Q'$. Apply dimension-$d$ decoupling on $B'$ for each fixed $y$, using the larger-ball and shifted-canonical-mesh clauses of the mesh lemma. Their constants are uniform in $y$. The zero extension outside $I$ gives precisely the canonical partition of $I$ beginning at its left endpoint, not an arbitrary finer partition. [given, F1, construct, algebra]

3.1 Minkowski at exponent $p/2\ge1$ moves the finite $\ell^2$ sum outside the $y$ integral. For $y\in Q''$ one has $w_{B',E}(x')\le C_{n,E}w_{B,E}(x',y)$: the centers differ only by the bounded $y$-coordinate of size $O(R)$ and all radii are fixed multiples of $R$. Consequently
$$ \|E_I^{(n)}g\|_{L^p(B)}\le C D_{p,d}(\delta,E)\left(\sum_{J\in\mathcal P_\delta(I)}\|E_J^{(n)}g\|_{L^p(w_{B,E})}^2\right)^{1/2}. $$
Here $\delta^{-d}=R$ and the same $E$ is admissible in dimension $d$ because $E\ge100n\ge100d$. [given, F1, construct, algebra]

4.1 Apply homogeneous local-to-weighted transfer in dimension $n$ to the last inequality, which holds on every radius-$R$ ball. Its right functional is degree one and superadditive after taking the $p$th power, so the transfer is legitimate with the same $E$. Finally divide both sides by $|B|^{1/p}$. This proves the entire stated $n\ge k\ge3$ range, with no unproved lower-dimensional endpoint assertion: the supplier is the defined finite constant $D_{p,k-1}$ itself. [given, F1, construct, algebra] ∎

