# Citation-precision audit — everything that cites `ex-contractive-sequence-fixed-point`

## The target, as it actually stands on disk

`items/ex-contractive-sequence-fixed-point.md` — example — The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

#### Example

Fix any $a \in \mathbb{R}$ and let $(x_k)$ be the sequence with $x_0 = a$ and

$$x_{k+1} = \frac{x_k + 1}{3} \qquad (k \in \mathbb{N}).$$

Then $(x_k)$ is contractive with contraction constant $c = 1/3$
([[def-contractive-sequence]]), and

$$\lim_{k} x_k = \frac{1}{2},$$

**whatever the starting value $a$ is**. Moreover
[[thm-contractive-implies-cauchy]] supplies the error bound
$|1/2 - x_k| \le 3^{\,-(k-1)}|x_2 - x_1|/(1 - 1/3)$ for $k \ge 1$, which is
computable from the first three terms alone.

The limit $1/2$ is the unique solution of $L = (L+1)/3$, that is the unique fixed
point of the map $u \mapsto (u+1)/3$. This is the smallest honest instance of the
Banach fixed point theorem: a contraction on $\mathbb{R}$ has one fixed point,
and every orbit converges to it.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-contractive-sequence` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$

- [[ex-contractive-sequence-fixed-point]] is the simplest instance.

### `thm-contractive-implies-cauchy` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [[ex-contractive-sequence-fixed-point]] carries out the arithmetic on a
