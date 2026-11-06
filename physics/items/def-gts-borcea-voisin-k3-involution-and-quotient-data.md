---
id: def-gts-borcea-voisin-k3-involution-and-quotient-data
kind: definition
title: Borcea–Voisin K3 involution and quotient data
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-gts-marked-m-polarized-k3-and-admissible-vector
dependency_roles:
  def-gts-marked-m-polarized-k3-and-admissible-vector: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Mark Gross and P. M. H. Wilson, Mirror Symmetry via 3-tori for a Class of Calabi-Yau Threefolds
      url: https://arxiv.org/pdf/alg-geom/9608004v3
      locator: "§2, printed pp. 8–10: invariant/anti-invariant lattices, D′_M/T′_M and mirror-period exclusion; §3, printed pp. 17–20: quotient, resolution and dual construction."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For the Borcea–Voisin data used here, let $(S,\phi)$ be a marked K3 surface as in [[def-gts-marked-m-polarized-k3-and-admissible-vector]], and let $\iota:S\to S$ be a holomorphic automorphism with $\iota^2=\mathrm{id}_S$ that acts by $-1$ on a chosen holomorphic two-form. Define the integral eigensublattices
$$H^2(S;\mathbb Z)^+:=\ker(\iota^*-\mathrm{id}),\qquad H^2(S;\mathbb Z)^-:=\ker(\iota^*+\mathrm{id}).$$
Use the source's lattice identification: under the marking $\phi$, the polarization lattice is $M=\phi(H^2(S;\mathbb Z)^+)$ and its orthogonal complement is $T=M^\perp=\phi(H^2(S;\mathbb Z)^-)$. Thus $M$ and $T$ are respectively the invariant and anti-invariant lattices of the involution; they are not independent lattice choices. Let $A$ be an elliptic curve with its chosen origin and negation involution $j(a)=-a$. In the fixed-locus case treated in Gross–Wilson §3, $\iota$ has $N>0$ fixed curves: $N-1$ are rational and one has genus $N'$. The source requires $N'>0$ in this case for the mirror construction. The quotient $(S\times A)/\langle(\iota,j)\rangle$ has $4N$ disjoint curves of $A_1$ singularities. The blow-up of a scheme $Y$ along an ideal sheaf $I$ means $\operatorname{Proj}_Y(\bigoplus_{r\ge0}I^r)$; here the center is the reduced singular locus. In this local $A_1$-along-a-smooth-curve case, the source's single blow-up resolves the quotient and gives its Borcea–Voisin threefold $X$.

The source's mirror construction additionally requires that $T$ contain a hyperbolic plane $P=U(1)$, with the following specified mirror involution action. For the source topological duality comparison, retain its actual period and tube-domain admissibility. Fix a basis $E,E'$ of $P$, with squares zero and $(E,E')=1$, and write $T=P\oplus\check M$. Put $\rho=\phi\circ\iota^*\circ\phi^{-1}:L\to L$. For $x\in L$, define
$$\operatorname{pr}_P(x)=(x,E')E+(x,E)E',\qquad r_P(x)=2\operatorname{pr}_P(x)-x.$$
The pairings are integers, and $x-\operatorname{pr}_P(x)\in P^\perp$, where the orthogonal complement is taken in $L$. Thus $L=P\oplus P^\perp$ and $r_P$ is the integral involutive isometry with $r_P|_P=+\mathrm{id}$ and $r_P|_{P^\perp}=-\mathrm{id}$. The prescribed mirror cohomological action is
$$\check\rho:=r_P\circ\rho.$$
Since $\rho|_P=-\mathrm{id}$ and $\rho$ preserves $P^\perp$, it commutes with $r_P$. Consequently $\check\rho$ is an involution, acting as $+\mathrm{id}$ on $\check M$ and $-\mathrm{id}$ on $P\oplus M$. For a selected mirror K3 surface with marking $\check\varphi:H^2(\check S;\mathbb Z)\to L$, the mirror involution datum is a holomorphic involution $\check\iota$ satisfying $\check\varphi\circ\check\iota^*\circ\check\varphi^{-1}=\check\rho$. This fixes the source's named action; geometric realization in the stated period and Kähler regime is supplied by the separate construction theorem, rather than assumed from a global Torelli theorem in this Definition.

Normalize the original period by $(E,\Omega)=1$. Its restricted locus is $D'_M=\{[\Omega]\in D_M:\operatorname{Im}\Omega\in\check M\otimes\mathbb R\}$. Require $[\Omega]\in D'_M\setminus\Delta_M$, where $\Delta_M=\{[\Omega]\in D_M:(\alpha,\Omega)=0\text{ for some }0\ne\alpha\in T\}$ is the original-period hyperplane locus. This is an additional admissibility condition on the original surface, separate from the mirror-period exclusion below. The complexified original Kähler data lie in $T'_M=\{B+i\omega\in M\otimes\mathbb C:\omega^2>0,\ (B,\omega)=0\}$, with $\omega$ an actual Kähler class. On the orthogonal complement $\check T=P\oplus M$ of $\check M$, define
$$\check\phi(B+i\omega)=\left[B+E'+\frac{\omega^2-B^2}{2}E+i\bigl(\omega-(B,\omega)E\bigr)\right].$$
The mirror root-hyperplane exclusion is
$$B+i\omega\in T'_M\setminus\check\phi^{-1}(\Delta_{\check M}),\qquad \Delta_{\check M}=\{[\check\Omega]\in D_{\check M}: (\alpha,\check\Omega)=0\text{ for some }0\ne\alpha\in\check T\}.$$
Here $D_{\check M}$ is the same period quadric for the primitive lattice $\check M$. Set
$$T_{\check M}:=\{\check B+i\check\omega\in\check M\otimes\mathbb C:\check\omega^2>0\},\qquad T'_{\check M}:=\{\check B+i\check\omega\in T_{\check M}:(\check B,\check\omega)=0\}.$$
Define the exchanged period map $\Phi_{M,\check M}:T_{\check M}\to D_M$ by the same displayed formula as $\check\phi$, with $M$ and $\check M$ exchanged (and with the corresponding exchanged marking and normalized-period convention). This is the Gross–Wilson isomorphism of Proposition 1.1; it restricts to $T'_{\check M}\to D'_M$ under the stated normalization. The map has domain $T_{\check M}$ and target $D_M$; it is distinct from the marking $\phi:H^2(S;\mathbb Z)\to L$. Write $\check B+i\check\omega=\Phi_{M,\check M}^{-1}([\Omega])$ using that restricted isomorphism. The corresponding mirror Kähler class $\check\omega$ is selected compatibly with its actual surface and chamber, as in Gross–Wilson §2. Auxiliary markings of the common elliptic model are chosen compatibly with its Kähler chamber; a P-root re-marking fixes $M$ and $\check M$ but need not preserve the label $E$ of its actual fibre. The named mirror period and selected mirror Kähler class are the displayed ones after that compatible marking. These formulas specify the source regime; they do not assert a global K3 period/Torelli theorem or prove that a positive-square real class is Kähler.

The mirror exclusion is substantive: for $B=0$ and $\omega^2=2$, the class $a_B=E'+E$ has positive square but is perpendicular to the algebraic root $\delta=E'-E$ on the conjugate elliptic model. One of $\pm\delta$ is effective, so $a_B$ is not Kähler. Here $(\delta,\check\phi(i\omega))=0$, precisely the locus excluded by the actual source. The numerical wall example explains why that exclusion must be explicit rather than inferred from positivity.

This definition does not include the excluded fixed-locus cases, claim a general mirror construction, or assert a nondegenerate Ricci-flat metric on the resolution.

## Definition references

[[def-gts-marked-m-polarized-k3-and-admissible-vector]]
