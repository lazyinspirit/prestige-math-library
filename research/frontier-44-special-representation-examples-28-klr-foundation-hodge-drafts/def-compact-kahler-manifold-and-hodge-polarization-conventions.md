---
id: "def-compact-kahler-manifold-and-hodge-polarization-conventions"
kind: "definition"
title: "Compact Kähler and rational Hodge polarization conventions"
status: "draft"
origin: "session"
deps: ["def-bigraded-complex-differential-forms", "def-axiom-of-choice"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}, {"title": "Pierre Deligne, Théorie de Hodge II, §§2.1.12–2.1.17 and Lemma 4.2.3", "url": "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"}]}
---

## Definition

Throughout this packet full AC is assumed; this carries the analytic and cohomological suppliers' choice assumptions. A compact Kähler manifold is a compact Hausdorff second-countable complex manifold without boundary, of complex dimension $n$, with Hermitian metric whose real fundamental form $\omega$ is closed and positive. Normalize the real metric so that in an oriented orthonormal real cotangent basis $(e_1,f_1,\ldots,e_n,f_n)$ one has $\omega=\sum e_j\wedge f_j$ and $dV=\omega^n/n!$. Complex-valued forms use the complex-linear real Hodge star and inner product $\langle\alpha,\beta\rangle=\int\alpha\wedge *\bar\beta$, linear in the first variable. Put $L=\omega\wedge$, $\Lambda=L^*$, and $\epsilon(k)=(-1)^{k(k-1)/2}$.

A rational pure Hodge structure of weight $k$ is a finite-dimensional rational vector space $V$ with $V_{\mathbb C}=\bigoplus_{p+q=k}V^{p,q}$ and $\overline{V^{p,q}}=V^{q,p}$. Its Weil operator $C$ is $i^{p-q}$ on $V^{p,q}$. A polarization is a rational nondegenerate bilinear form $Q$ with $Q(y,x)=(-1)^kQ(x,y)$, with $Q(V^{p,q},V^{a,b})=0$ unless $(a,b)=(q,p)$, and with $h(x,y)=Q(Cx,\bar y)$ positive definite Hermitian. A rational sub-Hodge structure $U$ means $U_{\mathbb C}=\bigoplus(U_{\mathbb C}\cap V^{p,q})$. Tate shift $V(-r)$ has bidegrees $(p+r,q+r)$ and weight $k+2r$; it does not change the underlying rational vector space.
