---
id: fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets
kind: false-statement
title: "FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-topology-of-pointwise-convergence, lem-convergence-in-the-pointwise-topology,
       def-topology-of-compact-convergence, def-topology-of-uniform-convergence,
       lem-uniform-convergence-in-the-uniform-metric, lem-uniform-metric-on-a-function-space,
       def-metric-compactness, thm-heine-borel-rn, def-interval,
       lem-real-line-is-a-metric-space, def-metrizable-space,
       lem-continuity-is-local-and-pastes, def-canonical-natural,
       cor-archimedean-reciprocal, def-max-min, lem-finite-set-has-max,
       def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy,
       def-metric-topology, def-metric-ball, def-subspace-topology-top,
       def-isometry-and-metric-embedding, lem-of-naturals-positive,
       lem-of-inverse-positive, def-metric-bounded-diameter, def-abs-value,
       def-metric-continuity, thm-comparison-of-the-three-function-space-topologies]
justified_by: []
aliases: []
landmark: false
short: "pointwise does not give uniform on compacta"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**False claim:** for metric spaces $X$ and $Y$, if a sequence $(f_k)$ in
$C(X,Y)$ converges pointwise to $f \in C(X,Y)$
([[lem-convergence-in-the-pointwise-topology]]), then $(f_k)$ converges to $f$
uniformly on every compact subset of $X$, that is $f_k \to f$ in the topology of
compact convergence ([[def-topology-of-compact-convergence]]).

The claim fails already on the compact space $X = [0,1]$ with $Y = \mathbb{R}$,
where it reduces to "pointwise convergence implies uniform convergence". The
refutation below writes down the standard moving spike explicitly. The relation
that **is** true is the inclusion of topologies
([[thm-comparison-of-the-three-function-space-topologies]]): compact convergence
implies pointwise convergence, and not the reverse.

No choice principle is used; every function below is given by a formula.

## Facts & Assumptions

**Given:** The interval $X := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$ ([[def-interval]]) with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $Y := \mathbb{R}$ with the same metric, the reals $a_k := 1/\iota(k+2)$ for $k \in \mathbb{N}$ ([[def-canonical-natural]]), and the constant function $\mathbf{0} : X \to \mathbb{R}$ with value $0$.

[L1] $\iota$ is strictly increasing on $\mathbb{N}$ and $\iota(n) > 0$ for $n \ge 1$, so $0 < a_k \le 1/\iota(2) = 1/2$ and $0 < 2a_k \le 1$ for every $k \in \mathbb{N}$, and $m \le n$ gives $a_n \le a_m$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] For every real $\varepsilon > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence uniformly continuous, hence continuous; and the restriction of a continuous map to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[def-abs-value]]).

[L4] A function on a topological space whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]], claim 3, [[def-subspace-topology-top]]).

[L5] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]]).

[L6] A subset of a metric space is closed exactly when its complement is open, and a set is open exactly when each of its points has a ball around it inside the set ([[def-metric-topology]], [[def-metric-ball]], [[def-metrizable-space]]).

[L7] The basic sets of the topology of compact convergence are $B_K(f,\varepsilon) = \{\, g : d(f(x),g(x)) < \varepsilon \text{ for every } x \in K \,\}$, and a sequence converging to $f$ in a topology is eventually inside every neighbourhood of $f$ ([[def-topology-of-compact-convergence]], [[def-topology-of-pointwise-convergence]]).

## Refutation

**Proof technique:** direct.

1.1 $[0,1]$ is bounded, being contained in the ball $B(0,2)$ of $\mathbb{R}$, and closed in $\mathbb{R}$, since a point $y < 0$ has $B(y,-y)$ inside the complement and a point $y > 1$ has $B(y, y-1)$ inside the complement; so $[0,1]$ is a compact subset of $\mathbb{R}$ and $(X,d)$ is a compact metric space. [L5, L6]

1.2 For $k \in \mathbb{N}$ define $f_k : X \to \mathbb{R}$ by $f_k(t) := t/a_k$ for $0 \le t \le a_k$, by $f_k(t) := 2 - t/a_k$ for $a_k \le t \le 2a_k$, and by $f_k(t) := 0$ for $2a_k \le t \le 1$. [construct, L1]

2.1 The three formulas agree where their domains overlap: at $t = a_k$ both of the first two give $1$, and at $t = 2a_k$ both of the last two give $0$; so $f_k$ is a well-defined function on $X$, the three closed sets $[0,a_k]$, $[a_k,2a_k]$ and $[2a_k,1]$ covering $X$ because $0 < 2a_k \le 1$. [step 1.2, L1]

2.2 $f_k(0) = 0$ for every $k$, from the first formula. [step 1.2]

2.3 For $t \in X$ with $t > 0$: by [L2] there is a natural $m \ge 1$ with $1/\iota(m) < t/2$, and then every $k \ge m$ has $k + 2 > m$, hence $a_k = 1/\iota(k+2) \le 1/\iota(m) < t/2$, hence $2a_k < t$ and $f_k(t) = 0$ by the third formula. [step 1.2, L1, L2]

2.4 On the other hand $f_k(a_k) = a_k/a_k = 1$ for every $k \in \mathbb{N}$, and $a_k \in X$ because $0 < a_k \le 1/2 \le 1$. [step 1.2, L1]

3.1 Each of the three restrictions is the restriction of an affine map of $\mathbb{R}$, hence continuous; so $f_k$ is continuous on $X$ by the pasting lemma for a finite closed cover, and $f_k \in C(X,\mathbb{R})$. [step 1.2, step 2.1, L3, L4]

3.2 By steps 2.2 and 2.3 the sequence $(f_k(t))$ is eventually $0$ for every $t \in X$, so $f_k(t) \to 0 = \mathbf{0}(t)$ for every $t \in X$; that is, $(f_k)$ converges pointwise to $\mathbf{0}$, which is continuous, being constant. [step 2.2, step 2.3, L3]

3.3 Hence for every $k \in \mathbb{N}$ the value $|f_k(a_k) - \mathbf{0}(a_k)| = 1$ is not below $1/2$, so $f_k \notin B_{X}(\mathbf{0}, 1/2)$, while $B_{X}(\mathbf{0},1/2)$ is a basic open set of the topology of compact convergence containing $\mathbf{0}$, the whole space $X$ being compact by step 1.1. [step 1.1, step 2.4, L7]

4.1 So no tail of $(f_k)$ lies in the neighbourhood $B_X(\mathbf{0},1/2)$ of $\mathbf{0}$: the sequence does **not** converge to $\mathbf{0}$ in the topology of compact convergence, although by step 3.2 it converges to $\mathbf{0}$ pointwise. [step 3.2, step 3.3, L7]

5.1 The pair $(X,Y) = ([0,1],\mathbb{R})$ with the sequence $(f_k)$ and the limit $\mathbf{0}$ therefore satisfies the hypothesis of the claim and violates its conclusion at the compact set $K = X$, so the claim is false. [step 3.2, step 4.1] ∎

## Remarks

- **The failure is not about the size of the domain.** The domain here is compact, so "uniformly on every compact set" is the same as "uniformly", and the witness shows that pointwise convergence does not give uniform convergence even there. What moves is the *place* where the two functions differ: the spike has height $1$ for every $k$ and merely slides towards $0$.

- **The area under the spike does tend to $0$**, so this witness does *not* also separate the integral from its pointwise limit: the standard warning that pointwise convergence controls no integral needs a spike whose height grows as its base shrinks. Nothing about integration is claimed here.

- **What is true in this direction.** Uniform convergence implies convergence on every compact set, which implies pointwise convergence ([[thm-comparison-of-the-three-function-space-topologies]]); the reverse of each implication fails, and the companion page separates the two rightmost topologies with a different witness on $\mathbb{R}$.

- **The index shift is not cosmetic.** $\mathbb{N}$ contains $0$, so the spike is built on $1/\iota(k+2)$ and not on $1/k$: at $k = 0$ the reciprocal $1/\iota(1)$ would give a support $[0,2]$ reaching outside $[0,1]$, and the pasting lemma would have nothing to paste.
