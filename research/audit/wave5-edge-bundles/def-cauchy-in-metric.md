# Citation-precision audit — everything that cites `def-cauchy-in-metric`

## The target, as it actually stands on disk

`items/def-cauchy-in-metric.md` — definition — Cauchy sequence in a metric space

#### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a
sequence in $X$, that is a function $\mathbb{N} \to X$ written $x_k := x(k)$
([[def-metric-convergence]], [[def-sequence]]). As everywhere in this library
$\mathbb{N}$ contains $0$, so a sequence is indexed from $0$.

$(x_k)$ is a **Cauchy sequence in $(X,d)$** if for every rational
$\varepsilon > 0$ there is $K \in \mathbb{N}$ such that

$$d(x_m, x_n) < \varepsilon \qquad \text{for all } m, n \ge K .$$

**Rational and real $\varepsilon$ agree here.** The test is written with a
rational $\varepsilon$ to match [[def-real-limit]] and [[def-metric-convergence]],
and nothing is lost by using a real one: below any real $\eta > 0$ lies a
positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that
rational serves for $\eta$. So a proof may establish Cauchyness by producing an
index for every real $\varepsilon > 0$, and may use a Cauchy hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**The condition is exactly $d(x_m,x_n) \to 0$ as $m$ and $n$ grow
independently.** The distances $d(x_m,x_n)$ are nonnegative reals
([[lem-metric-nonnegativity]]), and the displayed condition asks them to be
uniformly small on a tail of the doubly indexed family. It is not the same as
$d(x_{k+1}, x_k) \to 0$, which is a strictly weaker condition and is a standing
source of error. The partial sums $H_n$ of the harmonic series separate the two:
consecutive ones differ by $1/(n+1)$, which tends to $0$, while the sequence is
unbounded, and an unbounded sequence of reals is not Cauchy
([[lem-metric-cauchy-bounded]]).

**Consistency with the real line.** For $X = \mathbb{R}$ with the usual metric
$d(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]]) the condition above reads
$|x_m - x_n| < \varepsilon$ for $m,n \ge K$, which is verbatim the definition of a
Cauchy sequence of reals ([[def-real-limit]]). So the notion introduced here
restricts on $\mathbb{R}$ to the one already in use, and no ambiguity is created.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L2] $(x_k)$ is Cauchy in a metric space when for every real $\varepsilon > 0$ there is $K$ with the distance between $x_m$ and $x_n$ below $\varepsilon$ for all $m, n \ge K$; the rational and real tests agree ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).
