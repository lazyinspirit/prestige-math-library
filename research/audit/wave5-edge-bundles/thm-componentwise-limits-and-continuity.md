# Citation-precision audit — everything that cites `thm-componentwise-limits-and-continuity`

## The target, as it actually stands on disk

`items/thm-componentwise-limits-and-continuity.md` — theorem — A vector-valued function has a limit, or is continuous, if and only if each of its components does; with the algebra of continuous vector-valued functions

#### Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, with vector-valued functions, their
components $f_i = \pi_i \circ f$, their limits and their continuity as in
[[def-vector-valued-functions-limits-and-continuity]].

1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \subseteq X$,
   $f : A \to \mathbb{R}^{m}$ and $a \in A$. Then $f$ is continuous at $a$ if and
   only if every component $f_i : A \to \mathbb{R}$ $(i<m)$ is continuous at $a$.
2. **Limits are componentwise.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
   point of $A$ ([[def-limit-point-r]]), let $f : A \to \mathbb{R}^{m}$ and let
   $L \in \mathbb{R}^{m}$. Then $\lim_{x\to c} f(x) = L$ if and only if
   $\lim_{x\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]).
3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let
   $f, g : A \to \mathbb{R}^{m}$ be continuous at $a$ and let $\lambda \in \mathbb{R}$.
   Then $f + g$ and $\lambda f$ (defined pointwise) are continuous at $a$; the
   real-valued function $x \mapsto \langle f(x), g(x)\rangle$ is continuous at
   $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on
   $\mathbb{R}^{m}$ the real-valued function $x \mapsto N(f(x))$ is continuous at
   $a$ ([[def-norm-and-normed-space]]).

**Where $m \ge 1$ is spent.** The "if" direction of clauses 1 and 2 divides
$\varepsilon$ by $\iota(m)$, which requires $\iota(m) \ne 0$; and clause 3's last
part quotes a bound available only for $m \ge 1$. The "only if" directions hold
for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.

## The 3 citing use(s), quoted verbatim from the citing items

### `lem-euclidean-polygonal-paths-are-continuous` (published-backward, page the-topology-of-euclidean-space)

Title: A finite concatenation of straight segments in $\\mathbb{R}^n$ is a continuous path

- [L3] A map into $\mathbb{R}^n$ is continuous if and only if all of its coordinate functions are continuous ([[thm-componentwise-limits-and-continuity]], clause 1).

### `lem-radial-normalisation-is-continuous` (published-backward, page the-topology-of-euclidean-space)

Title: Radial normalisation $x\\mapsto x/\\lVert x\\rVert_2$ is continuous on $\\mathbb{R}^n\\setminus\\{0\\}$

- [L2] Componentwise continuity gives continuity into $\mathbb R^n$, and the subspace criterion gives continuity into a subspace when the image lies there ([[thm-componentwise-limits-and-continuity]], [[def-vector-valued-functions-limits-and-continuity]]).

### `thm-radial-straight-line-map-on-punctured-rn` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, the map $H(x,t)=((1-t)+t/\\lVert x\\rVert_2)x$ is continuous on $(\\mathbb{R}^n\\setminus\\{0\\})\\times[0,1]$, starts at $x$, ends at radial normalisation, fixes the unit sphere, and never reaches $0$

- [L4] Sums, products, and quotients with nowhere-zero denominator of continuous real-valued functions are continuous, and a vector-valued map is continuous exactly when its coordinate functions are continuous ([[thm-algebra-of-continuous-functions]], [[thm-componentwise-limits-and-continuity]]).
