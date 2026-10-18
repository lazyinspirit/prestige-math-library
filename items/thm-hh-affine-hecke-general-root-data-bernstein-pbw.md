---
id: thm-hh-affine-hecke-general-root-data-bernstein-pbw
kind: theorem
title: "General Bernstein PBW and the Iwahori–Matsumoto comparison"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-hh-affine-hecke-algebra-from-root-datum, def-hh-affine-hecke-bernstein-presentation, lem-hh-affine-hecke-bernstein-quotients-are-well-defined, lem-hh-signed-alcove-products-and-oriented-basis, lem-root-datum-combinatorics, def-abstract-root-datum-and-its-weyl-group, lem-hh-root-datum-affine-geometry-and-wall-parameters]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ulrich Görtz, Alcove walks and nearby cycles on affine flag manifolds"
      url: "https://arxiv.org/pdf/math/0610839"
      locator: "Proposition 3.3.1 and §3.4, including Lemmas 3.4.1–3.4.2 (PDF pp. 8–10)."
---

## Statement

Let $R=(X,\Phi,Y,\Phi^\vee,\Delta)$ be any reduced based root datum, and give its canonical extended affine Weyl group arbitrary positive affine Hecke parameters invariant under extended conjugation ([[def-hh-affine-hecke-algebra-from-root-datum]]). Write $v_\alpha$ for the parameter of the finite simple reflection $s_\alpha$. In the formal Bernstein algebra of [[def-hh-affine-hecke-bernstein-presentation]], attach its exceptional parameters to this affine system by requiring $v'_\alpha=v(H_{\alpha,1})$ for $\alpha\in\Delta\cap2X$, where $v(H)$ is the parameter of reflection in the wall $H$.

For $y\in Y$, write $y=\lambda-\mu$ with $\lambda,\mu$ dominant lattice elements. The element
$$\Theta_y:=N_{t_\lambda}N_{t_\mu}^{-1}$$
is independent of these choices and satisfies $\Theta_y\Theta_z=\Theta_{y+z}$. Its values are linearly independent, and both
$$\{\Theta_yN_w:y\in Y,\ w\in W_0\},\qquad\{N_w\Theta_y:y\in Y,\ w\in W_0\}$$
are complex vector-space bases of the Iwahori–Matsumoto algebra. The assignment $\theta_y\mapsto\Theta_y$, $N_s\mapsto N_s$ gives an isomorphism from the attached formal Bernstein algebra to the Iwahori–Matsumoto algebra. In particular both ordered families $\theta_yN_w$ and $N_w\theta_y$ are bases of the former. No restriction to an irreducible or semisimple datum, to equal parameters, or to parameters greater than one is imposed.

## Facts & Assumptions

**Given:** The root datum and attached positive parameter system above.

[F1] The canonical root-datum affine geometry has hyperplanes $H_{\alpha,k}=\{x:\langle\alpha,x\rangle=k\}$, reflection $r_{\alpha,k}=t_{k\alpha^\vee}s_\alpha$, dominant base alcove $A$, and extended group $Y\rtimes W_0$. The parameter of a wall is well defined. With $c_\alpha=v_\alpha-v_\alpha^{-1}$ and $c'_\alpha=v'_\alpha-(v'_\alpha)^{-1}$, its difference parameter $c(\alpha,k)=v(H_{\alpha,k})-v(H_{\alpha,k})^{-1}$ equals $c_\alpha$ for every $k$ if $\alpha\notin2X$; otherwise it equals $c_\alpha$ for even $k$ and $c'_\alpha$ for odd $k$ ([[lem-hh-root-datum-affine-geometry-and-wall-parameters]]).

[F2] For a chamber $D$ at infinity, signed gallery products $E_D(g)$ depend only on the framed endpoint $g$, including for nonminimal galleries and galleries starting elsewhere; the elements $E_D(g)$ form a basis ([[lem-hh-signed-alcove-products-and-oriented-basis]]).

[F3] The finite Weyl group and its bases, positive roots, chambers and length are those of [[lem-root-datum-combinatorics]]. The reflection action is $s_\alpha(y)=y-\langle\alpha,y\rangle\alpha^\vee$, and the root/coroot pairing is perfect and integral ([[def-abstract-root-datum-and-its-weyl-group]]).

[F4] The formal algebra has the group-algebra, finite Hecke and the two stated Bernstein cross-relations; each quotient appearing there is a finite Laurent polynomial ([[def-hh-affine-hecke-bernstein-presentation]], [[lem-hh-affine-hecke-bernstein-quotients-are-well-defined]]).

## Proof

**Given:** The data above. Take $D$ to be the dominant chamber at infinity and temporarily define $\Theta_y=E_D(t_y)$.

1.1 Translation by $y\in Y$ preserves crossing directions, while its possible permutation of facet types is accounted for by the crossed product. Explicitly write $t_y=w_y\omega_y$ with $w_y\in W_{\mathrm{aff}}$, $\omega_y\in\Omega$. If a gallery for $t_z$ has affine types $s_1,\ldots,s_r$ and terminal frame $\omega_z$, then after translation and removal of the initial affine transport $w_y$ its types are $\omega_y s_i\omega_y^{-1}$, with the same signs. The relation $U_{\omega_y}N_s^{\pm1}U_{\omega_y}^{-1}=N_{\omega_y s\omega_y^{-1}}^{\pm1}$ shows that multiplying its signed product after the product for $t_y$ gives exactly this translated gallery, with terminal frame $\omega_y\omega_z$. Concatenation and [F2] therefore give $\Theta_y\Theta_z=\Theta_{y+z}$. The empty gallery gives $\Theta_0=1$, so $\Theta_y^{-1}=\Theta_{-y}$. If $y$ is dominant, each separating wall is crossed toward $D$ on a minimal gallery to $t_yA$: for every positive root $\beta$, its coordinate changes from $\langle\beta,A\rangle\subset(0,1)$ to that interval translated by the nonnegative integer $\langle\beta,y\rangle$. Thus all signs are positive and $\Theta_y=N_{t_y}$. [F1, F2, F3, given, algebra]

2.1 Let $h$ be the sum of the positive coroots. A simple reflection permutes all positive coroots except its own, which it negates: in simple-coroot coordinates, reflection in a simple root changes only the coefficient of that simple coroot, so any other positive coroot retains a positive coefficient elsewhere and hence cannot become negative by [F3]. Therefore $s_\alpha(h)=h-2\alpha^\vee$; comparing with the reflection formula gives $\langle\alpha,h\rangle=2$ for each simple $\alpha$. For any $y$, sufficiently large integer $M\ge0$ makes $\mu=Mh$ and $\lambda=y+Mh$ dominant. If there are no roots use $\mu=0$, $\lambda=y$. Step 1.1 now yields $\Theta_y=\Theta_\lambda\Theta_\mu^{-1}=N_{t_\lambda}N_{t_\mu}^{-1}$, proving the asserted formula and its independence of the dominant decomposition. Central lattice directions cause no difficulty because no root inequality involves them. [F3, step 1.1, algebra]

3.1 For $w\in W_0$, a reduced finite gallery from $A$ to $wA$ crosses each of its separating root hyperplanes from its positive side to its negative side. Hence $E_D(w)=N_{w^{-1}}^{-1}$. Translate this gallery by $y$ and concatenate it after a gallery for $t_y$, transporting its types through $\omega_y$ by the crossed-product identity proved in step 1.1. By [F2], $E_D(t_yw)=\Theta_yN_{w^{-1}}^{-1}$. The elements $N_{w^{-1}}^{-1}$ form a basis of the finite Hecke algebra: expansion of each inverse $N_s^{-1}=N_s-c_s$ gives $N_w$ plus strictly shorter terms, and induction on finite Weyl length proves both spanning and independence. Every element of $Y\rtimes W_0$ has a unique expression $t_yw$, so the oriented basis [F2], followed by this finite change of basis separately for each $y$, proves that $\{\Theta_yN_w\}$ is a basis of the full algebra. In particular $y\mapsto\Theta_y$ embeds $\mathbb C[Y]$. [F1, F2, F3, step 1.1, algebra, step 2.1]

4.1 Fix $\alpha\in\Delta$, put $s=s_\alpha$, $a=\alpha^\vee$, $n=\langle\alpha,y\rangle$, and let $D'=sD$. The orientations toward $D$ and $D'$ differ only on the walls parallel to $\alpha$, since a simple reflection permutes the other positive roots by the simple-coordinate argument in step 2.1. Suppose $n\ge0$ and choose a minimal gallery from $A$ to $t_yA$. Its relevant walls are exactly $H_{\alpha,k}$ for $1\le k\le n$, each crossed once toward $D$ and in increasing order of $k$. On these crossings the signed factors for $D,D'$ are respectively $N_i,N_i^{-1}$, whose difference is $c(\alpha,k)$; on the other crossings the factors agree. [F1, F2, F3, step 2.1, algebra, step 3.1]

5.1 Expand $E_D(t_y)-E_{D'}(t_y)$ by telescoping over its relevant crossings, using the $D$ factors before a deleted factor and the $D'$ factors after it. In the term belonging to $H_{\alpha,k}$ replace $N_i-N_i^{-1}$ by $c(\alpha,k)$ and multiply on the right by $N_s$. The remaining signed word represents a gallery obtained by deleting that crossing and reflecting the whole subsequent tail across $H_{\alpha,k}$. Its signs are exactly the $D$ signs: the prefix already has them, while the reflection has linear part $s$ and therefore takes the $D'$ orientation of the suffix to $D$. Before reflecting, the added final crossing from $t_yA$ to $t_ysA$ moves toward $D'$, so its factor is indeed $N_s$. Deleting the crossing keeps the prefix unchanged and reflects the suffix's initial alcove back to that prefix's endpoint; hence this is a genuine gallery, even if it is not minimal. Its framed endpoint is $r_{\alpha,k}t_ys=t_{ka}st_ys=t_{sy+ka}=t_{y-(n-k)a}$. Thus [F2] identifies this term with $c(\alpha,k)\Theta_{y-(n-k)a}$. This explicitly accounts for every other wall crossing carried along in the tail. [F1, F2, step 4.1, algebra]

6.1 Starting with the positive $D'$ crossing from $A$ to $sA$, then reflecting a $D$ gallery for $t_{sy}$, and finishing with the negative $D'$ crossing from $t_ysA$ to $t_yA$, proves $E_{D'}(t_y)=N_s\Theta_{sy}N_s^{-1}$ by [F2]. Therefore steps 4.1–5.1 give $\Theta_yN_s-N_s\Theta_{sy}=\sum_{k=1}^n c(\alpha,k)\Theta_{y-(n-k)a}.$ For $n=0$ the products have identical signs, and the same conclusion holds with an empty sum. This derivation uses only the parameter of the deleted wall, so applies to arbitrary positive affine parameter values. [F1, F2, step 4.1, step 5.1, algebra]

7.1 If $\alpha\notin2X$, [F1] makes all coefficients in step 6.1 equal to $c_\alpha$. Setting $j=n-k$ and summing the geometric progression gives $\Theta_yN_s-N_s\Theta_{sy}=c_\alpha\frac{\Theta_y-\Theta_{sy}}{1-\Theta_{-a}}.$ If $\alpha\in2X$, perfect integral duality gives $n=2m$ for an integer $m\ge0$. Then $j=n-k$ has the same parity as $k$. The coefficients for even $j$ are $c_\alpha$ and those for odd $j$ are $c'_\alpha$. Pairing consecutive terms gives $\Theta_yN_s-N_s\Theta_{sy}=(c_\alpha+\Theta_{-a}c'_\alpha)\frac{\Theta_y-\Theta_{sy}}{1-\Theta_{-2a}}.$ Both expressions mean the finite Laurent polynomials of [F4], with value zero when $n=0$. [F1, F3, F4, step 6.1, algebra]

8.1 For all $y,z$ the expression $D(y)=\Theta_yN_s-N_s\Theta_{sy}$ satisfies $D(y+z)=\Theta_yD(z)+D(y)\Theta_{sz}$ by direct multiplication and step 1.1. Since $D(0)=0$, substituting $z=-y$ yields $D(y)=-\Theta_yD(-y)\Theta_{sy}$. If $n<0$, apply the proved nonnegative-pairing relation to $-y$. In either root case write its common rational coefficient as $C$, namely $c_\alpha/(1-\Theta_{-a})$ or $(c_\alpha+\Theta_{-a}c'_\alpha)/(1-\Theta_{-2a})$. Then $-\Theta_yC(\Theta_{-y}-\Theta_{-sy})\Theta_{sy}=C(\Theta_y-\Theta_{sy}).$ This calculation is valid in the fraction field of the embedded Laurent algebra from step 3.1; both final sides are the finite Laurent polynomials of [F4]. Thus the two Bernstein cross-relations hold for negative $n$ as well. [F4, step 1.1, step 3.1, step 7.1, algebra]

9.1 By steps 1.1 and 7.1–8.1, the elements $\Theta_y,N_s$ satisfy all defining relations of the attached formal Bernstein quotient $\mathcal B$. The finite Hecke relations already hold in the Iwahori–Matsumoto algebra. The universal property of the quotient therefore gives a homomorphism $F:\mathcal B\to\mathcal H_{\mathrm{IM}}$ sending its stated generators to those elements. [F4, step 1.1, step 7.1, step 8.1, construct]

10.1 In $\mathcal B$, every word lies in the span of $\theta_yN_w$. Indeed move lattice factors to the left through finite generators, using the rearranged Bernstein relation $N_s\theta_y=\theta_{sy}N_s+R_y$, where $R_y$ is its Laurent-polynomial error term; this is the defining relation applied to $sy$ with its sign reversed. Induct lexicographically on the number of finite generators and the number of finite-generator/lattice-factor inversions. The leading reordered term reduces the inversion number, and each error term loses one finite generator. Combine adjacent lattice factors and reduce the remaining finite Hecke word by its quadratic and braid relations. These reductions give finite sums, so the induction terminates. Under $F$ the resulting spanning family maps to the basis in step 3.1. A finite kernel relation would therefore have zero coefficients in that basis; and every element of the target has a preimage by that basis. Thus $F$ is an isomorphism and $\{\theta_yN_w\}$ is a basis of $\mathcal B$. [F4, step 3.1, step 9.1, algebra]

11.1 Reversal of words fixing every $\theta_y$ and every finite $N_s$ induces an involutive antiautomorphism of $\mathcal B$. The lattice relations are stable under reversal, as are the quadratic relations and the alternating braid relations. For the cross-relation, its right side has the form $R_y=C(\theta)(\theta_y-\theta_{sy})$ and satisfies $R_{sy}=-R_y$. The defining relation at $sy$, multiplied by $-1$, is $N_s\theta_y-\theta_{sy}N_s=R_y$, precisely the reversed defining relation at $y$; Laurent factors commute on the right side. Hence every defining relation is preserved. This involution sends the basis $\theta_yN_w$ to $N_{w^{-1}}\theta_y$. Inversion permutes $W_0$, so $\{N_w\theta_y\}$ is a second basis. Transporting it by $F$ proves the second ordered basis in $\mathcal H_{\mathrm{IM}}$. Every selection, expansion and induction used in the proof is finite; no choice principle is needed. [F4, step 10.1, algebra] ∎
