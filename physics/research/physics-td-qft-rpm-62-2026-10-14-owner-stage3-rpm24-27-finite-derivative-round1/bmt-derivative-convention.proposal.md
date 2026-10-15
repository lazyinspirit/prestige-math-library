Here $\nabla_U s$ denotes the covariant derivative of the section $s$ along the specified curve, rather than differentiation of an unspecified ambient extension. More generally, for any $C^1$ vector field $V$ along this $C^2$ worldline $z$, define

$$(D_\tau V)^a:=\frac{dV^a}{d\tau}+\Gamma^a{}_{bc}(z(\tau))U^bV^c,\qquad \nabla_U s:=D_\tau s.$$

The components of $V$ are $C^1$ functions of $\tau$ in each smooth chart, and the displayed derivative is continuous. This is the pullback-connection derivative on $z^*TM$. To verify that the component definition is independent of the chart, let $y=y(x)$ and $J^\alpha{}_a:=\partial y^\alpha/\partial x^a$. The connection transformation law gives

$$\Gamma'^\alpha{}_{\beta\gamma}J^\beta{}_bJ^\gamma{}_c=J^\alpha{}_a\Gamma^a{}_{bc}-\partial_bJ^\alpha{}_c.$$

Since $V'^\alpha=J^\alpha{}_aV^a$, the ordinary chain and product rules give $\dot V'^\alpha=J^\alpha{}_a\dot V^a+(\partial_bJ^\alpha{}_c)U^bV^c$. The two transition-derivative terms cancel, leaving $(D_\tau V)'^\alpha=J^\alpha{}_a(D_\tau V)^a$. Thus no smoothness of the curve beyond $C^2$, or of the section beyond $C^1$, is required. Metric compatibility also gives $\frac d{d\tau}g(V,W)=g(D_\tau V,W)+g(V,D_\tau W)$ for $C^1$ sections $V,W$: insert the component formulas and $\partial_bg_{ac}=\Gamma^d{}_{ba}g_{dc}+\Gamma^d{}_{bc}g_{ad}$. These conventions specify the mathematical derivative in the adopted transport law; they add no further physical motion assumption.
