# Citation-precision audit — everything that cites `def-injection-surjection-bijection`

## The target, as it actually stands on disk

`items/def-injection-surjection-bijection.md` — definition — Injection, surjection, bijection

#### Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function.

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$.

## The 3 citing use(s), quoted verbatim from the citing items

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L7] $\mathbb{R}$ is locally compact if every point has a compact set containing a ball around it; and then the exponential law holds for $X = \mathbb{R}$ and arbitrary $Z, Y$, with $\Phi$ a bijection whose inverse sends $F$ to $(x,z) \mapsto F(z)(x)$ ([[def-locally-compact-metric-space]], [[thm-the-exponential-law]], [[def-evaluation-map]], [[def-injection-surjection-bijection]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L7] An at most countable nonempty family is the set of values of a function with domain $\mathbb{N}$ ([[def-countable]], [[def-injection-surjection-bijection]]).

### `thm-the-exponential-law` (published-backward, page function-space-topologies)

Title: The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology

- ([[def-injection-surjection-bijection]]); its inverse sends a continuous
- [L5] Two functions with the same domain are equal exactly when they take the same value at every point of it; an element of $X \times Z$ is determined by its two coordinates ([[def-product-topology]], [[def-injection-surjection-bijection]]).
- [L6] A map is a bijection exactly when it is injective and surjective ([[def-injection-surjection-bijection]]).
