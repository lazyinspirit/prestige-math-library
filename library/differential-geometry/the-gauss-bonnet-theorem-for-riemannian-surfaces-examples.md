---
page: "the-gauss-bonnet-theorem-for-riemannian-surfaces-examples"
title: "The Gauss Bonnet Theorem for Riemannian Surfaces — Examples"
status: published
items: []
examples:
  - ex-gauss-bonnet-for-a-euclidean-disk
  - ex-gauss-bonnet-for-a-euclidean-annulus
  - ex-gauss-bonnet-for-the-round-sphere
  - ex-gauss-bonnet-for-a-flat-torus
  - ex-hyperbolic-geodesic-triangle-area-defect
  - ex-spherical-geodesic-triangle-area-excess
  - ex-gauss-bonnet-for-a-spherical-cap
  - ex-a-polyhedral-style-geodesic-triangulation-angle-count
  - ex-projective-plane-total-curvature-from-a-hemisphere-identification
  - cex-omitting-exterior-corner-angles-from-a-geodesic-polygon
  - cex-using-inward-normal-first-reverses-the-boundary-term
  - ex-metric-independence-of-total-curvature-on-a-deformed-sphere
---

The examples verify the identities on model surfaces and locate the conventions. The Euclidean disk of radius $R$ has $K\equiv0$, $\chi(D)=1$, and outward-normal-first boundary circle with $k_g=1/R$, so Gauss-Bonnet reads $0+2\pi=2\pi\cdot1$; the Euclidean annulus has outer contribution $+2\pi$ and inner contribution $-2\pi$, total boundary integral $0$, so the formula reads $0+2\pi-2\pi=2\pi\cdot0$. On the radius-$R$ round sphere $K=R^{-2}$, the octahedral curvilinear triangulation gives $\chi(S^2_R)=2$, and $\int K\,dA=4\pi=2\pi\chi(S^2_R)$; the flat torus $\mathbb R^2/\mathbb Z^2$ has $K\equiv0$ and $\chi=0$ from an explicit grid triangulation, so the identity reads $0=0$.

For a compact regular triangular disk region in the hyperbolic plane, with three embedded geodesic sides and ordinary corners, the sides have vanishing geodesic curvature, so the local formula becomes the area-defect identity $\alpha+\beta+\gamma=\pi-A$ on the hyperbolic plane; in constant positive curvature it becomes the area-excess identity $\alpha+\beta+\gamma=\pi+A/R^2$ on the sphere. The spherical cap of polar angle $\theta_0$ illustrates a nonconstant boundary term: $\int_DK\,dA=2\pi(1-\cos\theta_0)$ and $\int_{\partial D}k_g\,ds=2\pi\cos\theta_0$, whose sum is the constant $2\pi=2\pi\chi(D)$.

Two further computations exercise the combinatorial and orientation-free machinery. The tetrahedral incidence pattern with $V=4$, $E=6$, $F=4$ gives $2\pi(V-E+F)=4\pi$. If face angles are supplied from a smooth closed-surface triangulation, their total around the four vertices is $8\pi$, and the resulting exterior-angle total is $4\pi$. A curvature integral $\int_MK\,dA=4\pi$ follows only when a smooth oriented Riemannian surface with a qualifying finite geodesic triangulation is also supplied. The incidence pattern alone specifies neither angles nor a surface. The round real projective plane $S^2_R/(x\sim-x)$ is nonorientable, carries the descended metric with $K=R^{-2}$ and area $2\pi R^2$, and the orientation-free density Gauss-Bonnet theorem gives total curvature $2\pi=2\pi\chi(\mathbb{RP}^2)$ and hence $\chi(\mathbb{RP}^2)=1$.

The two counterexamples and the final example separate the boundary conventions from the invariant content. Omitting the exterior corner angles from the complete formula fails already on the Euclidean square, where the corner-free expression $0+0$ differs from $2\pi$. Replacing the outward-normal-first convention by the inward-normal-first one reverses the Euclidean disk boundary term from $+2\pi$ to $-2\pi$, so the identity fails. Finally, on a deformed spheroidal sphere the pointwise Gaussian curvature varies (for instance between $c^2/a^4$ at the poles and $1/c^2$ at the equator when $a\ne c$), while the total curvature remains $4\pi=2\pi\chi(S^2)$, exhibiting the metric independence of the total against the metric dependence of the local density.
