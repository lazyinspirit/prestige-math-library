---
page: "kahler-differentials-conormal-sequences-and-infinitesimal-lifting-examples"
title: "Kahler Differentials Conormal Sequences and Infinitesimal Lifting — Examples"
status: draft
items: []
examples: ["ex-differentials-polynomial-ring", "ex-differentials-hypersurface", "ex-differentials-dual-numbers", "ex-differentials-separable-field-extension-zero", "cex-differentials-purely-inseparable-field-nonzero", "cex-conormal-left-map-not-injective", "ex-tangent-vectors-affine-space-dual-numbers", "ex-unramified-closed-point-immersion", "cex-frobenius-zero-tangent-map-not-formally-etale"]
---

These computations make the differential package concrete. The polynomial algebra $k[x,y]$ has free
$\Omega$ on $\mathrm dx,\mathrm dy$ with the monomial formula $\mathrm d(x^ay^b)=ax^{a-1}y^b\,\mathrm dx+bx^ay^{b-1}\,\mathrm dy$,
and a plane quotient $k[x,y]/(f)$ is presented by the single Jacobian relation
$f_x\,\mathrm dx+f_y\,\mathrm dy$, which can vanish without $f$ being constant. For the dual numbers
$k[\epsilon]/(\epsilon^2)$ the answer splits by the vanishing or invertibility of $2$: free of rank one in
characteristic $2$, one-dimensional over $k$ and not free otherwise. The separable field case
$\Omega_{L/k}=0$ is derived by differentiating the minimal polynomial of a primitive element, while the
purely inseparable extension $k[X]/(X^p-a)$ with $a\notin k^p$ has $\Omega\cong L\,\mathrm d\alpha\ne0$
because the derivative of $X^p-a$ vanishes.

The remaining items isolate the failure modes and the geometric meaning. In $I=(x^2)\subseteq k[x]$ the
class $[x^3]$ is nonzero in $I/I^2$ but dies in $B\otimes_P\Omega_{P/k}$, so the conormal sequence is right
exact only; affine $n$-space has tangent space $k^n$ at a $k$-rational point with dual-number points
$\varphi_v(X_i)=a_i+\epsilon v_i$; the closed immersion $\operatorname{Spec}k\hookrightarrow\mathbb A^1_k$
is unramified yet not open, and more generally every closed immersion is unramified. Finally the absolute
Frobenius of $\mathbb A^1_{\mathbb F_p}$ has zero map on absolute differentials while its relative module
$\Omega_{k[t]/k[u]}\cong k[t]\,\mathrm dt$ is nonzero, so it is not formally étale: vanishing of the
induced map on absolute differentials is not a criterion for formal étaleness.
