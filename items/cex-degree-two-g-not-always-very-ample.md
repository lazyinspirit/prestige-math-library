---
id: cex-degree-two-g-not-always-very-ample
kind: counterexample
title: "Degree 2g does not force very ampleness"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - cor-h0-canonical-differentials-genus
  - cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
  - cor-rr-exact-high-degree-formula
  - def-axiom-of-choice
  - def-base-point-linear-system
  - def-canonical-line-bundle-curve
  - def-complete-linear-system
  - def-degree-divisor-proper-curve
  - def-dependent-choice
  - def-invertible-sheaf-of-cartier-divisor
  - def-little-l-divisor
  - def-very-ample-invertible-sheaf-relative
  - def-nonconstant-morphism-curves-degree
  - lem-degree-pullback-divisor-finite-morphism-curves
  - lem-projective-line-divisors-classified-by-degree
  - thm-base-point-free-linear-system-morphism
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-cartier-weil-divisors-curves-agree
  - thm-degree-two-g-line-bundle-basepoint-free
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - thm-full-riemann-roch-divisor
  - thm-genus-one-canonical-bundle-trivial
  - thm-h0-structure-sheaf-proper-curve
  - thm-projective-map-line-bundle-data-equivalence
  - thm-local-ring-smooth-curve-dvr
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  precheck: pass

---

## Statement refuted

Assume the Axiom of Choice; it supplies Dependent Choice through
[[thm-choice-implies-dependent-implies-countable-choice]].
The theorem that every line bundle of degree at least $2g+1$ on a curve of
genus $g$ is very ample is sharp over any field $k$ when the curve has a
$k$-rational point: for a smooth proper geometrically integral curve $C/k$ of
genus $g\ge1$ with $p\in C(k)$, the line bundle
$\mathcal O_C(K_C+2p)$ has degree $2g$ and need not be very ample.
When $k$ is algebraically closed, every closed point is $k$-rational, so this
includes the algebraically closed-field case.

## Facts & Assumptions

**Given:** the Axiom of Choice and its consequence Dependent Choice; a field
$k$, a smooth proper geometrically integral curve $C$ of genus $g\ge1$ over
$k$, a $k$-rational point $p\in C(k)$, a canonical divisor $K_C$, and the invertible sheaf
$\mathcal L=\mathcal O_C(K_C+2p)$.

[F1] On an integral proper curve over a field, divisors are finite integral
sums of closed points and $\deg_kD=\sum_xn_x[\kappa(x):k]$; since the given
point $p$ is $k$-rational, $\deg_k(p)=1$. Moreover $\deg_k(K_C)=2g-2$ for every
choice of the nonzero rational differential defining $K_C$, the sheaf
$\omega_C=\Omega^1_{C/k}$ satisfies $\omega_C\cong\mathcal O_C(K_C)$, and under
the divisor--invertible-sheaf dictionary
$\mathcal L(-p)=\mathcal O_C(K_C+p)$ and
$\mathcal L(-2p)=\mathcal O_C(K_C)$, with the corresponding inclusions of
spaces of global sections.
([[def-degree-divisor-proper-curve]],
[[cor-canonical-degree-two-g-minus-two]], [[def-canonical-line-bundle-curve]],
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-cartier-weil-divisors-curves-agree]])

[F2] For a divisor $D$ of degree $>2g-2$ on a smooth proper geometrically
integral curve of genus $g$ the nonspecial formula holds:
$\ell(D)=\deg_kD+1-g$ and $H^1(C,\mathcal O_C(D))=0$, equivalently
$h^0(C,\mathcal O_C(D))=\deg_kD+1-g$.
([[cor-rr-exact-high-degree-formula]],
[[cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two]],
[[thm-full-riemann-roch-divisor]], [[def-little-l-divisor]])

[F3] $\ell(K_C)=h^0(C,\omega_C)=g$ for any canonical divisor $K_C$.
([[cor-h0-canonical-differentials-genus]], [[def-little-l-divisor]])

[F4] A closed point $q$ is a base point of the complete linear system $|D|$ of
a divisor $D$ exactly when $H^0(C,\mathcal O_C(D-q))=H^0(C,\mathcal O_C(D))$,
equivalently when every global section of $\mathcal O_C(D)$ vanishes at $q$;
$D$ is base-point-free when it has no base point. A base-point-free subspace
$V\subseteq L(D)$ of dimension $r+1\ge1$ defines a morphism
$\varphi_V:C\to\mathbb P^r_k$ with $\varphi_V^*\mathcal O(1)\cong
\mathcal O_C(D)$; its system members are the pullbacks of hyperplanes.
Conversely, if a morphism
$i:C\to\mathbb P^n_k$ is equipped with an isomorphism
$i^*\mathcal O(1)\cong\mathcal O_C(D)$, its pulled-back coordinate sections
form an ordered generating tuple, and the projective-data theorem reconstructs
$i$ from that tuple. Their span is a base-point-free subspace of $L(D)$, but
may have dimension less than $n+1$; equality with the basis morphism from the
span up to a projective-linear change applies when the pulled-back coordinates
are linearly independent. ([[def-base-point-linear-system]],
[[def-complete-linear-system]],
[[thm-base-point-free-linear-system-morphism]],
[[thm-projective-map-line-bundle-data-equivalence]])

[F5] An invertible $\mathcal O_C$-module $\mathcal L$ is closed $H$-very ample
relative to $\operatorname{Spec}k$ when there is a closed immersion
$i:C\to\mathbb P^n_k$ with $i^*\mathcal O(1)\cong\mathcal L$; $H$-very ample
relative to $\operatorname{Spec}k$ means such an immersion exists that is
quasi-compact. A locally closed immersion has injective differential at every
point of its source (for a closed immersion this is the injectivity of the
induced maps of Zariski tangent spaces, and an open immersion is an
isomorphism onto its image); in particular an immersion
$i:C\to\mathbb P^n_k$ has $di_x\neq0$ at every closed point $x$ of $C$, because
the tangent space $T_xC$ of the smooth curve $C$ is one-dimensional.
([[def-very-ample-invertible-sheaf-relative]])

[F6] The very-ampleness theorem whose degree bound is tested here: if
$\deg_k\mathcal L\ge2g+1$, then $\mathcal L$ is closed $H$-very ample relative
to $\operatorname{Spec}k$ and the associated morphism $\varphi_{\mathcal L}$
is a closed immersion.
([[thm-degree-two-g-plus-one-line-bundle-very-ample]])

[F7] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F8] In ZF, the Axiom of Choice implies Dependent Choice; this supplies the
Dependent Choice premise of the Cartier-to-Weil divisor dictionary used in
[F1] and the cited divisor suppliers. ([[thm-choice-implies-dependent-implies-countable-choice]],
[[def-dependent-choice]])

[F9] On a genus-one curve, every canonical divisor satisfies $K_C\sim0$ by
[[thm-genus-one-canonical-bundle-trivial]]. A nonconstant morphism of smooth
proper curves is finite, and the degree of a pulled-back line bundle is the
map degree times its degree; on $\mathbb P^1_k$, $\deg\mathcal O(1)=1$.
Also $H^0(C,\mathcal O_C)=k$, so a constant $k$-morphism from $C$ to
$\mathbb P^1_k$ has image a $k$-rational point and pulls $\mathcal O(1)$ back
to a trivial line bundle.
([[def-nonconstant-morphism-curves-degree]],
[[lem-degree-pullback-divisor-finite-morphism-curves]],
[[lem-projective-line-divisors-classified-by-degree]],
[[thm-h0-structure-sheaf-proper-curve]])

[F10] Assuming AC as inherited from the duality suppliers, if $C$ is a smooth
proper geometrically integral curve of genus $g$ over any field $k$ and an
invertible sheaf $\mathcal E$ has degree at least $2g$, then $\mathcal E$ is
base-point-free and its complete linear system defines a $k$-morphism to
$\mathbb P^{h^0(C,\mathcal E)-1}_k$ pulling back $\mathcal O(1)$ to $\mathcal E$.
([[thm-degree-two-g-line-bundle-basepoint-free]])



## Counterexample

**Proof technique:** compute the image of the evaluation map on two-jets at
$p$; it is one-dimensional, so no immersion with pullback $\mathcal L$ can be
nonzero on tangent spaces at $p$.

1.1 Since $p$ is $k$-rational, $\deg_k(p)=1$, so $\deg_k(K_C+2p)=(2g-2)+2=2g$ and $\deg_k(K_C+p)=2g-1$; moreover $\mathcal L(-p)=\mathcal O_C(K_C+p)$ and $\mathcal L(-2p)=\mathcal O_C(K_C)=\omega_C$ as subsheaves of the sheaf of rational sections. [F1]

1.2 Let $i:C\to\mathbb P^n_k$ be any $k$-morphism with an isomorphism $\alpha:i^*\mathcal O(1)\to\mathcal L$. Put $t_j=\alpha(i^*x_j)$ for the projective coordinates $x_0,\dots,x_n$. The projective-data theorem in [F4] says that these sections form an ordered generating tuple and reconstruct $i$ from that tuple. Their span $W_i\subseteq H^0(C,\mathcal L)$ is base-point-free, but its dimension may be less than $n+1$ if the coordinate sections are linearly dependent. [F4]

1.3 The Axiom of Choice is used through the degree, duality, linear-system, and projective-data suppliers; [F8] supplies Dependent Choice for the Cartier-to-Weil divisor route. [F7, F8, F1, F2, F4, F6]

2.1 Local computation at $p$: since the tuple in Step 1.2 generates $\mathcal L$, one of its coordinate sections is nonzero at $p$; after renumbering coordinates call it $t_0$. Use $t_0$ as a local frame to identify $\mathcal L_p/\mathfrak m_p^2\mathcal L_p$ with $\mathcal O_{C,p}/\mathfrak m_p^2$, where the jet of $t_0$ is the class of $1$. On the affine chart of $\mathbb P^n_k$ where the corresponding coordinate is nonzero, $i$ is given by the ratios $t_j/t_0$; therefore $di_p=0$ exactly when every ratio has zero differential, equivalently when the jet of each $t_j$ lies in the line $k\cdot[t_0]$. This says precisely that the image of $W_i$ in $\mathcal L_p/\mathfrak m_p^2\mathcal L_p$ is one-dimensional. [F4, algebra]

2.2 Since $\deg_k\mathcal L=2g>2g-2$, the divisor $D=K_C+2p$ is nonspecial and [F2] gives $h^0(C,\mathcal L)=\ell(D)=\deg_kD+1-g=g+1$ together with $H^1(C,\mathcal L)=0$. [F2, step 1.1]

2.3 By Step 1.1, $\mathcal L(-2p)=\mathcal O_C(K_C)=\omega_C$ and $\mathcal L(-p)=\mathcal O_C(K_C+p)$; hence $h^0(C,\mathcal L(-2p))=h^0(C,\omega_C)=g$ by [F3], and $h^0(C,\mathcal L(-p))=g$ by [F2] applied to the divisor $K_C+p$ of degree $2g-1>2g-2$. [F1, F2, F3, step 1.1]

2.4 Since $\deg_k\mathcal L=2g$, theorem [F10] applies over the given arbitrary field $k$ and shows that $\mathcal L$ is base-point-free. Thus the complete linear system $|\mathcal L|$ is defined over $k$. [F10, step 1.1]

3.1 Let $A=\mathcal O_{C,p}$ and $\mathfrak m=(t)$, where $t$ is a uniformizer; choose a local frame $e$ of $\mathcal L_p$. Since $A/\mathfrak m=\kappa(p)=k$ and $\mathfrak m/\mathfrak m^2$ is one-dimensional over $k$, the exact sequence $0\to\mathfrak m/\mathfrak m^2\to A/\mathfrak m^2\to A/\mathfrak m\to0$ gives $\dim_k(A/\mathfrak m^2)=2$. Hence $\mathcal L_p/\mathfrak m^2\mathcal L_p\cong e(A/\mathfrak m^2)$ is two-dimensional, with value and first-order classes represented by $e$ and $te$. The kernel of $\mathrm{ev}:H^0(C,\mathcal L)\to\mathcal L_p/\mathfrak m^2\mathcal L_p$ consists of sections whose stalk at $p$ lies in $\mathfrak m^2\mathcal L_p$; since $\mathcal L(-2p)$ has stalk $\mathfrak m^2\mathcal L_p$ at $p$ and agrees with $\mathcal L$ away from $p$, this kernel is exactly $H^0(C,\mathcal L(-2p))$. Therefore $\dim_k\operatorname{im}\mathrm{ev}=h^0(C,\mathcal L)-h^0(C,\mathcal L(-2p))=(g+1)-g=1$. [F2, step 2.2, step 2.3, algebra]

3.2 By Step 2.4 the space $V=H^0(C,\mathcal L)$ is base-point-free of dimension $g+1$, so [F4] provides the morphism $\varphi_{\mathcal L}:C\to\mathbb P^g_k$ of the complete linear system, with $\varphi_{\mathcal L}^*\mathcal O(1)\cong\mathcal L$; its target is $\mathbb P^{h^0(C,\mathcal L)-1}_k=\mathbb P^g_k$. [F4, step 2.2, step 2.4]

4.1 For the arbitrary morphism $i$ of Step 1.2, $W_i\subseteq H^0(C,\mathcal L)$, so its image in $\mathcal L_p/\mathfrak m_p^2\mathcal L_p$ is contained in the one-dimensional image of $H^0(C,\mathcal L)$ from Step 3.1. It contains the nonzero jet of $t_0$ from Step 2.1, so its image is exactly one-dimensional and Step 2.1 gives $di_p=0$. [step 3.1, step 1.2, step 2.1]

5.1 By [F5] an immersion has injective differential at every point and the tangent space $T_pC$ is one-dimensional, so $di_p=0$ means that $i$ is not an immersion at $p$; Steps 1.2--4.1 apply to every $k$-morphism $i:C\to\mathbb P^n_k$ with $i^*\mathcal O(1)\cong\mathcal L$ and every $n$. Thus no such morphism is a closed or locally closed immersion, and $\mathcal L$ is not closed $H$-very ample relative to $\operatorname{Spec}k$. [F5, step 4.1]

6.1 The morphism $\varphi_{\mathcal L}$ of Step 3.2 is one of the morphisms covered by Step 5.1, so $d\varphi_{\mathcal L}=0$ at $p$ and $\varphi_{\mathcal L}$ is not a closed immersion; its differential vanishes at the point $p$ of the base-point-free system $|\mathcal L|$. [F4, step 3.2, step 5.1]

7.1 For $g=1$, [F9] gives $K_C\sim0$ (the chosen representative need not equal the zero divisor), hence $\mathcal L\cong\mathcal O_C(2p)$. Step 2.2 gives $h^0(C,\mathcal L)=2$, so the complete linear system morphism has target $\mathbb P^1_k$ and pulls back $\mathcal O(1)$ to $\mathcal L$. It is nonconstant because a constant map to a $k$-rational point pulls $\mathcal O(1)$ back to a trivial line bundle, whereas $\deg_k\mathcal L=2$. By [F9], it is finite and $\deg_k\mathcal L=\deg(\varphi_{\mathcal L})\deg\mathcal O_{\mathbb P^1}(1)=\deg(\varphi_{\mathcal L})$, so it is a morphism of degree two. The divisors in the pencil $|2p|$ are pullbacks of $k$-rational points of $\mathbb P^1_k$ and have degree two; a closed point $q$ pulls back to degree $2[\kappa(q):k]$ by [F9]. [F1, F3, F4, F9, step 2.2, step 6.1]

8.1 In summary $\mathcal L$ has $\deg_k\mathcal L=2g$, is base-point-free by Step 2.4, and is not closed $H$-very ample relative to $\operatorname{Spec}k$ by Step 5.1; since [F6] gives closed $H$-very ampleness for every line bundle of degree at least $2g+1$, the hypothesis $\deg\ge2g+1$ cannot be weakened to $\deg\ge2g$ and the bound $2g+1$ is sharp. [F6, step 5.1, step 7.1] ∎
