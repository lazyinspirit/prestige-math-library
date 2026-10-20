2. **General convex case.** Suppose every $f_i$ is convex and differentiable,
and $f$ attains its minimum at $x^\star$. Set $\eta_g=\sqrt S$ and choose
$0<\widetilde\eta=K\eta_l\eta_g\le1/(81\beta)$. For uniform
$J\in\{0,\ldots,R-1\}$ and $\bar x_R=x_J$,
$$ \frac1R\sum_{r=0}^{R-1}\mathbb E[f(x_r)-f^\star] \le\frac{D^2+28\beta N\widetilde\eta^2F/S} {\widetilde\eta R} +\frac{19\widetilde\eta\sigma^2}{KS}. $$
In particular, for $\epsilon>0$, choosing
$$ \widetilde\eta\le\min\left\{\frac1{81\beta}, \frac{\epsilon KS}{57\sigma^2}\right\} $$
with the variance restriction omitted when $\sigma=0$, and taking
$$ R=O\left( \frac{\sigma^2D^2}{KS\epsilon^2} +\frac{\beta D^2}{\epsilon} +\frac{NF}{S} \right) $$
suffice for expected objective error at most $\epsilon$.
