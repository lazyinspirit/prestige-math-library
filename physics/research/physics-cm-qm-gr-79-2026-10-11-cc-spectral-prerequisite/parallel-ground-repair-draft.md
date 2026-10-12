# Ground probability elaboration — research only

Sole owning reviewer: `/root/physics_spectral_repair_successor`. Inputs are bound in `parallel-ground-dipole-read-bindings.json`. No production, mirrors, readiness, imports, history/caps, or acceptance changes. Preserve the entire existing Statement (a)–(e), including arbitrary Borel spatial probabilities and SI energy scaling. Retain existing AC/CC assumptions because supplier contracts carry them; this proposal invents no new choice use.

## Supplier corrections and exact conventions

Laguerre exhaustion (b) proves simplicity for each fixed half-line $A_l$; full operator $C$ has $n^2$-dimensional eigenspaces by negative-subspace completeness and degeneracy (a). Ground [F1] incorrectly attributes $n^2$ to Laguerre (c): add the already-declared negative-subspace theorem (a) citation. Do not narrow full degeneracy to radial simplicity. Negative-subspace [F2]'s quoted norm equality is valid only for a single block; the full family uses the sum of squared block norms from the unitary reduction.

The normalized radial vector is $u_{10}=2a_0^{-3/2}re^{-r/a_0}$ in $L^2(dr)$ and the spatial vector is $u_{10}Y_{00}/r=(\pi a_0^3)^{-1/2}e^{-r/a_0}$ in $L^2(dx)$. Here $Y_{00}=1/\sqrt{4\pi}$ and $\sigma(S^2)=4\pi$. The ground eigenspace is simple because $n=1$, not because all Coulomb levels are simple. Transported realization (d) gives actual $H^2$ domain membership; clause (e) uses $m=0$, which is precisely the ground case. The Cartesian function $e^{-|x|/a_0}$ is not smooth at zero, and must not be called smooth to prove domain membership.

## Concrete proof replacement

Retain current 1.1, 2.1 and 3.1 after correcting [F1]. In 2.1 retain the full angular indicator integral for general $B$; $4\pi$ enters only for radial sets or radial marginalization. Equivalently the spatial probability is $\int_0^\infty p(r)(4\pi)^{-1}\int_{S^2}\mathbf1_B(r\Omega)d\sigma\,dr$.

Replace current 3.2 by:

3.2 [Density versus point probability] Set $t=2\varepsilon/a_0$. Step 2.1 gives $P(|x|<\varepsilon)=\frac12\int_0^t s^2e^{-s}ds=1-e^{-t}(1+t+t^2/2)$ by differentiation and the fundamental theorem. Since $0\le1-e^{-s}=\int_0^s e^{-v}dv\le s$, the difference from $t^3/6$ has absolute value at most $t^4/8$. Thus the claimed $O(\varepsilon^4)$ expansion holds for fixed $a_0$; the probability is strictly positive for every $\varepsilon>0$ and tends to zero. The density $(\pi a_0^3)^{-1}e^{-2r/a_0}$ is strictly decreasing in $r$, while every singleton has zero probability because its Lebesgue measure is zero. [step 2.1, F3, algebra]

In 4.1 explicitly use the full negative-spectrum supplier for the energy sequence. On the common domain $H^2$, $C_{\hbar,m,\kappa}=(\hbar^2/(2m))C$ with $\gamma=2m\kappa/\hbar^2$. Positive scalar multiplication preserves eigenspaces and scales eigenvalues to $-m\kappa^2/(2\hbar^2n^2)$, preserving $n^2$ multiplicity. Unit symbols are not independent: substitute $\mathrm J=\mathrm{kg\,m^2s^{-2}}$. Then $[a_0]=\mathrm m$, $[a_0^2]=\mathrm m^2$, $[m\kappa^2/(2\hbar^2)]=\mathrm J$. Supplementary dimensions agree: $[\psi]=\mathrm m^{-3/2}$, $[u]=\mathrm m^{-1/2}$, $[p]=\mathrm m^{-1}$. Retain the Statement's mathematical parametrization qualification; no empirical identification follows.

## Outstanding obligations

The formula calculations contain no newly found mathematical gap. Sole-owner supplier/whole-consumer acceptance remains outstanding, including actual block transport and spectral completion. This support does not audit the transitive closure or remove AC contracts. The locally read Teschl Theorem 10.9 confirms the reindexing $n_{local}=n_{book}+1$ and degeneracy $(n_{book}+1)^2$. Its extracted ground formula loses angular normalization, so the present $4\pi$ is verified by the local integral. No Binney full-text reading or source acceptance is claimed.
