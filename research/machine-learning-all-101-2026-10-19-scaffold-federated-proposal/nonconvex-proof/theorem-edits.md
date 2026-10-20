# Exact nonconvex edits for combined theorem (parent applies alongside convex repair)

1. In introductory hypotheses specify beta>0. Define F=f(x_0)-f* unconditionally, and define D only when a minimizer exists. Current wording incorrectly defines both only upon existence of x*.
2. In branch3 only replace step bound constant24 by100. Keep original14F/(tR)+140 beta t sigma²/(KS) exact displayed rate and the full stated communication order. The staged stronger potential proves it.
3. Add the following proof steps after completed convex proof (renumber as appropriate if its phases change):

3.1 In the nonconvex case, take $\eta_g=\sqrt S$ and $t=\widetilde\eta\le p^{2/3}/(100\beta)$. Apply the nonconvex round-progress supplier with potential $P_r=\mathbb E[f(x_r)-f^\star]+24\beta^3t^2\Xi_r/p$. Its variance factor $1+S/\eta_g^2$ equals two. Summing its recursion over $r=1,\ldots,R$, using $\Xi_0=0$ and $P_R\ge0$, gives $R^{-1}\sum_{r=0}^{R-1}\mathbb E\|\nabla f(x_r)\|_2^2\le3F/(tR)+60\beta t\sigma^2/(KS)$. A uniform independent index $J\in\{0,\ldots,R-1\}$ has this same expected squared gradient norm. Increasing the constants from $3,60$ to $14,140$ proves the displayed bound. [F2, F6, F8, A1, A2, given, algebra]

3.2 For $F>0$, choose $t=\min\{p^{2/3}/(100\beta),\epsilon KS/(280\beta\sigma^2)\}$, omitting the variance restriction if $\sigma=0$, and take $R\ge\lceil28F/(t\epsilon)\rceil$. Each term in the displayed $14,140$ bound is at most $\epsilon/2$. The reciprocal step is at most $100\beta p^{-2/3}+280\beta\sigma^2/(KS\epsilon)$, so the asserted communication order follows, with the usual integer rounding of at most one round. If $F=0$, $x_0$ attains the global lower bound and differentiability gives $\nabla f(x_0)=0$, so return it immediately. [F2, step 3.1, given, algebra] ∎

4. Add Fact F2 immediately after F1:

[F2] [[lem-scaffold-nonconvex-round-progress]]: for $t\le p^{2/3}/(100\beta)$ the potential $P_r=\mathbb E[f(x_r)-f^\star]+24\beta^3t^2\Xi_r/p$ pays $t\mathbb E\|\nabla f(x_{r-1})\|_2^2/3$ and has variance term $10\beta t^2\sigma^2(1+S/\eta_g^2)/(KS)$.

5. Delete only the nonconvex unresolved-obligation text and stale nonconvex Remarks. Replace them with:

The source states the nonconvex sufficient step bound with absolute constant $1/24$. The local proof uses $1/100$ to account for dependence between participation, adaptive queries and the server displacement. The communication order and the stated uniform server-iterate output are preserved.

No statement about the unresolved convex clause is changed by this note. The parent owns every consumer repair and all metadata/checks.
