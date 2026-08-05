# Citation-precision audit — everything that cites `thm-all-norms-on-rn-are-equivalent`

## The target, as it actually stands on disk

`items/thm-all-norms-on-rn-are-equivalent.md` — theorem — For $n \\ge 1$ all norms on $\\mathbb{R}^n$ are equivalent

#### Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. Then any two norms on $\mathbb{R}^{n}$ are
equivalent ([[def-equivalent-norms]], [[def-norm-and-normed-space]]).

More precisely, for every norm $N$ on $\mathbb{R}^{n}$ there are reals
$c > 0$ and $C' > 0$ with

$$c\,\lVert x\rVert_2 \;\le\; N(x) \;\le\; C'\,\lVert x\rVert_2 \qquad \text{for every } x \in \mathbb{R}^{n},$$

and the general statement follows because equivalence of norms is an equivalence
relation.

**Consequently all the metric notions on $\mathbb{R}^{n}$ are norm independent**
for $n \ge 1$: any two norms give the same open sets, the same convergent
sequences with the same limits, the same Cauchy sequences and the same uniformly
continuous maps ([[def-equivalent-norms]]).

**The hypothesis $n \ge 1$ is used twice in the proof and both uses are marked**:
once so that the constant $C$ of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] exists, and once
so that the Euclidean unit sphere is **nonempty**, which is what the extreme
value theorem needs. At $n = 0$ the conclusion is true but vacuous, the zero
space carrying exactly one norm ([[def-norm-and-normed-space]]), and it is not
obtained from the argument below.

## The 1 citing use(s), quoted verbatim from the citing items

### `rem-euclidean-topology-dictionary` (published-backward, page the-topology-of-euclidean-space)

Title: The product, Euclidean-metric and norm topologies on $\\mathbb{R}^n$ agree, and for $n=1$ they agree with the real-line topology

- For $n \ge 1$, the product topology on $\mathbb{R}^n$ is the metric topology of each of $d_1$, $d_2$, and $d_\infty$ ([[lem-product-topology-on-rn]]). Every norm on $\mathbb{R}^n$ is equivalent to the Euclidean norm, hence induces that same topology ([[thm-all-norms-on-rn-are-equivalent]]). Thus open, closed, compact, connected, and continuous below have one unambiguous Euclidean meaning.
