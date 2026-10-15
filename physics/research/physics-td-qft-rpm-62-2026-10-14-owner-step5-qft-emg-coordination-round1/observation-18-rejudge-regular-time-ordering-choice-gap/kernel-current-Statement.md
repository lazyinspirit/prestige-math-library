Assume the Axiom of Countable Choice. Fix the scalar shell parameter $\mu\ge0$ and all shell, Fourier, and metric conventions of [[def-qft-scalar-mass-shell]], with $\eta=\operatorname{diag}(-1,1,1,1)$ and $\Box=-\partial_t^2+\Delta_{\mathbf x}$. For $\phi\in\mathcal S(\mathbb R^4)$ define the partial spatial Fourier transform
$$\widehat\phi_t(\mathbf k)=\int_{\mathbb R^3}e^{-i\mathbf k\cdot\mathbf x}\phi(t,\mathbf x)\,d^3\mathbf x$$
and define $H_\mu\in\mathcal S'(\mathbb R^4)$ by
$$\langle H_\mu,\phi\rangle=\int_{\mathbb R}dt\int_{\mathbb R^3}\frac{d^3\mathbf k}{(2\pi)^3\,2\omega_\mu(\mathbf k)}e^{-i\omega_\mu(\mathbf k)|t|}\widehat\phi_t(-\mathbf k).$$
This is a continuous distributional extension of the free scalar time-ordered two-point function: on $t>0$ its kernel is the Wightman two-point distribution $W_\mu(t,\mathbf x)$, and on $t<0$ it is $W_\mu(-t,-\mathbf x)$. The displayed partial Fourier formula fixes the extension at $t=0$; no product of a step function with an unspecified singular distribution is used. The kernel is symmetric under $(t,\mathbf x)\mapsto(-t,-\mathbf x)$, agrees with the two orderings on spacelike-separated supports, and obeys
$$ (\Box-\mu^2)H_\mu=i\delta_0 $$
in $\mathcal S'(\mathbb R^4)$. There is no extra prefactor $i$ in the definition of $H_\mu$.
