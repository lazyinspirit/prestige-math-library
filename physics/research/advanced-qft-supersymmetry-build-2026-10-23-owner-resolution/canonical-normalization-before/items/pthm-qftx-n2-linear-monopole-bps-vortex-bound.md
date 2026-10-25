---
id: pthm-qftx-n2-linear-monopole-bps-vortex-bound
kind: physics-theorem
title: 'Critical monopole truncation: BPS bound, minimizing tubes and nonlinear obstruction'
status: draft
origin: session
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
dependency_level: 9
deps:
- def-qftx-n2-monopole-local-dual-higgs-model
- def-qftx-n2-dual-higgs-flux-tube-sector
dependency_roles:
  def-qftx-n2-monopole-local-dual-higgs-model: formulation-prerequisite
  def-qftx-n2-dual-higgs-flux-tube-sector: formulation-prerequisite
proof_strategy: direct
physical_scope: Exact classical energy identities and conditional minimizing flux cylinders in the explicitly frozen-metric, linear-superpotential local dual-Higgs truncation. Generic nonlinear soft breaking is separated by an explicit stationarity obstruction; no vortex existence, microscopic matching, quantum area law or error bound is asserted.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: 'David Tong, TASI Lectures on Solitons, Lecture 3: Vortices'
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf
    locator: '§§3.1–3.2, printed pp.70–73, equations (3.1),(3.7)–(3.10): critically tuned energy, square completion and flux bound. Local two-field normalization and nonlinear obstruction derived here.'
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: '§5.6, printed pp.30–32, equations (5.17)–(5.21): local monopole superpotential, Higgs vacuum and limited patch.'
verification:
  precheck: pass
---

## Statement

Use the constant-metric connection-normalized dual model, but explicitly take the linear truncation $u(A_D)=u_m+cA_D$, where $c\ne0$, $\mu\ne0$, $g=g_D>0$. Put $v^2=|\mu c|/\sqrt2$, $\xi=2v^2$ and $e^{i\beta}=-\mu c/(\sqrt2v^2)$. Define charge-one fields

$$q=\frac{M+e^{i\beta}\overline{\widetilde M}}{\sqrt2},\qquad p=\frac{M-e^{i\beta}\overline{\widetilde M}}{\sqrt2},\qquad s=|q|^2+|p|^2.$$

Let $A=\widetilde A_1dx^1+\widetilde A_2dx^2$ be smooth and real on $\mathbb R^2$, $D_i=\partial_i-iA_i$, $B=\partial_1A_2-\partial_2A_1$ and $a=A_D$. Consider any smooth finite-energy profile in the winding-$n$ class of the flux-sector definition, $n\ne0$, with $q$ winding $n$, $|q|\to\sqrt\xi$, $p\to0$ and $a\to0$. In addition require the covariant boundary-current integral $\oint_{|x|=R}(\bar qDq+\bar pDp)$ to tend to zero, and the square integrals below to exist; exponential covariant decay suffices. For $n>0$ its full transverse energy obeys

$$E=2\pi\xi n+\int_{\mathbb R^2}\left\{\frac{[B-g^2(\xi-s)]^2}{2g^2}+|(D_1+iD_2)q|^2+|(D_1+iD_2)p|^2+2g^2\xi|p|^2+g^{-2}|\partial_i a|^2+2|a|^2s\right\}d^2x.$$

For $n<0$ reverse the transverse orientation to obtain $E\ge2\pi\xi|n|=4\pi v^2|n|$. If a smooth critical abelian-Higgs solution $q,A$ with $|q|\to\sqrt\xi$, winding $n>0$, the stated decay, and

$$(D_1+iD_2)q=0,\qquad B=g^2(\xi-|q|^2)$$

is supplied, then $a=p=0$, $M=q/\sqrt2$, $\widetilde M=e^{i\beta}\bar q/\sqrt2$ is a stationary absolute transverse energy minimum among all the above full-model profiles with the same winding. Its tension is $T_n=2\pi\xi|n|$. This statement permits every nonzero integer winding and all supplied vortex centres; it does not prove existence of a critical solution.

For the classical static three-dimensional energy on $\mathbb R^2\times[0,L]$, impose the same flux $2\pi n$ and decay on almost every transverse slice, no flux loss through transverse infinity, and nonnegative longitudinal covariant-gradient and Maxwell terms. Suppose each prescribed end trace can be joined to one chosen transverse minimizer by a supplied smooth collar of fixed length $\ell$, finite energy $C_0$ or $C_1$, with the collar equal to the minimizer near its inner face and with the same flux on every slice. For $L\ge2\ell$, the infimum $I_L$ in this fixed-flux, fixed-end-trace class satisfies

$$T_nL\le I_L\le T_n(L-2\ell)+C_0+C_1\le T_nL+C_0+C_1.$$

Thus $I_L=T_nL+O(1)$, with a bound independent of $L$. If both traces equal the minimizer and no additional end constraints are imposed, the translation-invariant extension is an exact minimum with energy $T_nL$. These are classical finite-cylinder boundary sectors. Equating them with a specified microscopic external-electric-probe sector requires a separate physical dictionary and boundary/collar construction; no point-probe self-energy subtraction or quantum Wilson-loop area law follows here. In linear response about the Higgs vacuum, original magnetic probes are dual electric sources for a vector of mass $m_D^2=2g^2\xi$; its unit canonical static source potential is $e^{-m_Dr}/(4\pi r)$, so that response is screened. The tube instead carries dual magnetic, hence original electric, flux in the adopted frame.

For a generic nonlinear $u$, the same embedded fields with $a=0$ have the pointwise potential derivative

$$\left.\partial_{\bar a}V_\mu\right|_{a=0}=g^2\bar\mu\,\overline{u''(0)}\bigl(\sqrt2M\widetilde M+\mu c\bigr).$$

Whenever this is nonzero at any point, the embedded profile is not stationary for the full nonlinear model. Small soft breaking alone does not make the exact linear-truncation BPS claim an exact claim about that full model.

## Statement references

[Tong, §§3.1–3.2](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf).

[Seiberg and Witten, §5.6](https://arxiv.org/pdf/hep-th/9407087v1).

## Facts & Assumptions

**Given:** The fields, constant coupling, linear truncation, winding/decay hypotheses, and, only where used, the supplied critical solution or collars in the Statement.

[F1] The connection-normalized local model has potential $g^2|\sqrt2M\widetilde M+\mu u'(a)|^2+2|a|^2(|M|^2+|\widetilde M|^2)+g^2(|M|^2-|\widetilde M|^2)^2/2$, scalar kinetic coefficient $g^{-2}$ for $a$ and canonical coefficients for the charged fields. [[def-qftx-n2-monopole-local-dual-higgs-model]]

[F2] The admitted winding sector has smooth gauge potential, limiting flux $2\pi n$ under the angular one-form boundary condition, and finite transverse energy including the $a$ gradient; the original electric flux means dual magnetic flux. [[def-qftx-n2-dual-higgs-flux-tube-sector]]

## Proof

1.1 The inverse change of variables is $M=(q+p)/\sqrt2$ and $e^{i\beta}\overline{\widetilde M}=(q-p)/\sqrt2$. It preserves the sum of charged kinetic norms and gives $|M|^2+|\widetilde M|^2=s$. Set $z=e^{-i\beta}M\widetilde M$. The charged part of the potential in [F1] at linear $u$ is $2g^2|z-v^2|^2+g^2(|M|^2-|\widetilde M|^2)^2/2=g^2s^2/2+2g^2v^4-4g^2v^2\operatorname{Re}z$. Since $2\operatorname{Re}z=|q|^2-|p|^2$ and $\xi=2v^2$, this is $g^2(s-\xi)^2/2+2g^2\xi|p|^2$. The remaining scalar potential is $2|a|^2s$ and its gradient term is $g^{-2}|\partial_i a|^2$. [given, F1, algebra]

2.1 For either charged field $f=q,p$, direct differentiation using $[D_1,D_2]f=-iBf$ gives $|(D_1+iD_2)f|^2=|D_1f|^2+|D_2f|^2-B|f|^2+i\{\partial_1(\bar fD_2f)-\partial_2(\bar fD_1f)\}$. Integrate this identity on disks and let their radius tend to infinity; the given boundary-current hypothesis removes the last term. Expanding $[B-g^2(\xi-s)]^2/(2g^2)$ gives $B^2/(2g^2)+g^2(\xi-s)^2/2+Bs-\xi B$. Adding the two field identities cancels $Bs$ and yields exactly the energy identity, since the limiting flux is $2\pi n$. The latter also follows directly by integrating $dA$ on each disk and using the specified $d\theta$ coefficient at infinity, as in [F2]. [given, F1, F2, step 1.1, algebra]

3.1 Every remaining integrand is nonnegative because $g,\xi>0$. A supplied critical solution with $a=p=0$ makes them all zero and has energy $2\pi\xi n$; it is therefore an absolute energy minimum in its winding class. Smooth compactly supported variations preserve the asymptotic class, so differentiating their energy at this minimum gives zero and proves stationarity. Reflecting $x^2$ changes flux and winding sign while preserving energy, giving the negative-winding case and $T_n=2\pi\xi|n|$. This uses a supplied solution only and establishes no solution existence. [given, step 2.1, algebra]

4.1 Decompose the three-dimensional energy into transverse energy on each slice plus its nonnegative longitudinal terms. The slice bound in step 3.1 integrates to $E_3\ge T_nL$ for every competitor. For the upper bound, concatenate the two supplied collars and the translation-invariant minimizer on the middle interval of length $L-2\ell$. The collar matching assumption gives a smooth admissible competitor with total energy $C_0+T_n(L-2\ell)+C_1$; the middle has no longitudinal energy. Taking the infimum proves both bounds and their uniform $O(1)$ consequence. With matching minimizer end traces, the constant extension attains the lower bound directly. [given, step 3.1, algebra]

5.1 In the nonlinear potential [F1], put $H=\sqrt2M\widetilde M+\mu u'(a)$. Differentiation gives $\partial_{\bar a}(g^2H\bar H)=g^2H\bar\mu\,\overline{u''(a)}$. The derivative of $2|a|^2s$ is $2as$, which vanishes at $a=0$; all gradient terms also have zero first variation at identically zero $a$. Thus the displayed derivative is the remaining Euler–Lagrange source. If it is nonzero somewhere, a smooth compactly supported variation of the complex field $a$ supported in a small neighborhood makes the first variation nonzero, proving nonstationarity. For the screening distinction, the constant vacuum has $q=\sqrt\xi$, $p=a=0$. With $A_c=A/g$, its charged gradient term contributes $-g^2\xi A_{c,\mu}A_c^\mu$, hence $m_D^2=2g^2\xi$ by the Proca normalization. The linearized unit static source equation is $(-\Delta+m_D^2)A_{c,0}=\delta_0$ in three spatial dimensions. Radial differentiation verifies $G(r)=e^{-m_Dr}/(4\pi r)$ solves the homogeneous equation for $r>0$; $-4\pi r^2G^{\prime}(r)\to1$ and the locally integrable mass term establish the unit delta distribution at the origin. Its exponential decay proves screening only in this linear response. The cylinder statement instead fixes dual magnetic/original electric flux; it supplies no quantum observable or control of omitted nonlinear and higher-derivative terms. [given, F1, F2, algebra] ∎
