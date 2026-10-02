---
id: lem-global-residue-pairing-injective-left
kind: lemma
title: "A nonzero global dual section detects a cohomology class"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-dimension-noetherian-topological-space
  - def-field-norm-and-trace
  - def-invertible-sheaf
  - def-principal-parts-sheaf-line-bundle-curve
  - def-residue-pairing-principal-parts
  - def-residue-rational-differential-curve-point
  - lem-curve-closed-subsets-finite
  - lem-principal-parts-cech-h1-presentation
  - lem-residue-pairing-descends-cohomology
  - lem-uniformizer-differential-is-a-basis
  - thm-dvr-element-normal-form
  - thm-local-ring-smooth-curve-dvr
  - thm-trace-form-is-nondegenerate-iff-separable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the residue suppliers. Let $C$
be a smooth proper geometrically integral curve over a perfect field $k$ and
let $\mathcal L$ be an invertible $\mathcal O_C$-module. Then the $k$-linear
map
$$\Phi\colon H^0(C,\omega_C\otimes\mathcal L^{-1})\longrightarrow H^1(C,\mathcal L)^*,\qquad s\longmapsto\bigl(c\mapsto\langle c,s\rangle\bigr),$$
given by the residue pairing of [[def-residue-pairing-principal-parts]] is
injective: every nonzero global section $s$ of
$\omega_C\otimes\mathcal L^{-1}$ detects some class in $H^1(C,\mathcal L)$.
If, in addition, the two spaces are known to be finite-dimensional of equal
dimension (the dimension balance established separately in this development),
then $\Phi$ is an isomorphism. Under that additional hypothesis the residue
pairing is perfect: the annihilator in $H^1(C,\mathcal L)$ of all global dual
sections is zero. By the principal-parts presentation, any finite-support
representative of such a class then lies in the diagonal image of a global
meromorphic section of $\mathcal L$, including zero.

## Facts & Assumptions

**Given:** a perfect field $k$; a smooth proper geometrically integral curve
$C$ over $k$, so that $C$ is a nonempty irreducible finite-type $k$-scheme of
chain dimension $1$ (in the sense of
[[def-dimension-noetherian-topological-space]]) with generic point $\eta$,
every closed point of $C$ has a finite residue field, and every nonempty open
subset of $C$ contains $\eta$; an invertible $\mathcal O_C$-module $\mathcal L$;
and a global section $s\in H^0(C,\omega_C\otimes\mathcal L^{-1})$.

[F1] The sheaf $\mathcal L_\eta$ of meromorphic sections of $\mathcal L$ is the
constant sheaf with value the one-dimensional $K$-vector space
$\mathcal L_\eta$, $K=k(C)$; the stalk of the sheaf of principal parts
$\mathcal P(\mathcal L)=\mathcal L_\eta/\mathcal L$ at a closed point $p$ is
$\mathcal L_\eta/\mathcal L_p$, and
$H^0(C,\mathcal P(\mathcal L))=\bigoplus_p\mathcal L_\eta/\mathcal L_p$ is the
space of finite-support families of local principal parts. For an invertible
sheaf on the integral curve, its map into the generic fibre is locally
$A\hookrightarrow K$ in a frame and is injective. Thus a nonzero global
section of $\omega_C\otimes\mathcal L^{-1}$ has a nonzero generic germ and a
nonzero germ at every closed point. The principal-parts descriptions are
supplied by [[def-principal-parts-sheaf-line-bundle-curve]]
([[def-invertible-sheaf]]).

[F2] The cohomology space $H^1(C,\mathcal L)$ is the cokernel of the diagonal
map $\mathcal L_\eta\to\bigoplus_p\mathcal L_\eta/\mathcal L_p$; for a
finite-support family $c=(c_p)$ and a global section
$s\in H^0(C,\omega_C\otimes\mathcal L^{-1})$ the sum
$\langle c,s\rangle=\sum_p\operatorname{res}_p(c_ps)$ is finite, depends only
on the class of $c$ in $H^1(C,\mathcal L)$, and the induced residue pairing
$H^1(C,\mathcal L)\times H^0(C,\omega_C\otimes\mathcal L^{-1})\to k$ is
$k$-bilinear ([[lem-principal-parts-cech-h1-presentation]],
[[def-residue-pairing-principal-parts]],
[[lem-residue-pairing-descends-cohomology]]).

[F3] At a closed point $p$ with $\kappa(p)$ finite separable over $k$, a
rational differential written as $\omega=a\,\mathrm dt$ with $t$ a
uniformizer and $a\in K\subseteq\kappa(p)((t))$ has residue
$\operatorname{res}_p(\omega)=\operatorname{Tr}_{\kappa(p)/k}([t^{-1}]a)$,
the field trace of the coefficient of $t^{-1}$ in the Laurent expansion
([[def-residue-rational-differential-curve-point]]).

[F4] The local ring $\mathcal O_{C,p}$ is a discrete valuation ring with
uniformizer $t$, maximal ideal $(t)$, every nonzero element of it is a unit
times a power of $t$, and the residue map
$\mathcal O_{C,p}\to\kappa(p)$ is surjective with kernel $(t)$
([[thm-local-ring-smooth-curve-dvr]]). For every nonzero rational function
$x\in K$, [[thm-dvr-element-normal-form]] gives the unique expression
$x=w t^m$ with $w\in\mathcal O_{C,p}^{\times}$ and
$m=\operatorname{ord}_p(x)$; in particular, when $x$ is regular and nonzero,
$m\ge0$ and $t^{-m}x$ is a unit.

[F5] The canonical bundle $\omega_C=\Omega^1_{C/k}$ is invertible. At each
closed point $p$, the perfect-field hypothesis makes $\kappa(p)/k$ finite
separable, so $\mathrm dt$ is a basis of $\omega_{C,p}$ for a uniformizer
$t$; every rational differential has the form $g\,\mathrm dt$ for a unique
$g\in K$. The local basis assertion is supplied by
[[lem-uniformizer-differential-is-a-basis]], and invertibility by
[[def-canonical-line-bundle-curve]].

[F6] If $k$ is perfect then every algebraic extension of $k$ is separable, so
a finite residue field extension $\kappa(p)/k$ is separable, and then the
trace form $(x,y)\mapsto\operatorname{Tr}_{\kappa(p)/k}(xy)$ is nondegenerate;
the trace is $k$-linear
([[cor-algebraic-extensions-of-perfect-fields-are-separable]],
[[thm-trace-form-is-nondegenerate-iff-separable]],
[[def-field-norm-and-trace]]).

[F7] The Axiom of Choice is [[def-axiom-of-choice]].

[F8] The underlying space of $C$ is Noetherian: the finite-type affine-cover
argument in [[lem-curve-closed-subsets-finite]] establishes this for the
present integral finite-type scheme under Choice. For a Noetherian space, chain
dimension is the supremum of the lengths of strict chains of nonempty
irreducible closed subsets
([[def-dimension-noetherian-topological-space]]). Since $C$ has chain
dimension $1$, there is a strict chain $Z_0\subsetneq Z_1$ of nonempty
irreducible closed subsets of $C$.

[F9] Under the Axiom of Choice, every proper closed subset of an integral
finite-type $k$-scheme of chain dimension $1$ is a finite set of closed points
([[lem-curve-closed-subsets-finite]]). The hypotheses hold for $C$.

## Proof

**Proof technique:** direct; use injectivity of localization for a frame of an invertible sheaf to obtain a nonzero local coefficient, then choose a principal part whose local residue is nonzero by nondegeneracy of the trace form.

1.1 (Nonzero generic and closed-point germs.) Put $E=\omega_C\otimes\mathcal L^{-1}$. If a nonzero global section $s\in H^0(C,E)$ had zero generic germ, then on each affine trivializing open its regular coefficient in the domain $A$ would map to zero in $\operatorname{Frac}(A)$, forcing it to vanish; thus $s_\eta\ne0$. For any closed $p$, take an affine trivialization $U=\operatorname{Spec}A$ and write $s|_U=g e$; since $U$ contains $\eta$, $g$ maps to $s_\eta\ne0$, so $g\ne0$, and the localization map $A\to A_p$ is injective, hence $s_p\ne0$. [F1, F5, given]

1.2 Since $C$ has chain dimension one, [F8] gives a strict chain $Z_0\subsetneq Z_1$ of nonempty irreducible closed subsets. In particular, $Z_0$ is a nonempty proper closed subset of $C$. By [F9], it is a finite set of closed points; choose $p\in Z_0$. Thus $C$ has a closed point. [F7, F8, F9, given]

2.1 (Local coefficient before its order.) Choose a uniformizer $t\in A_p=\mathcal O_{C,p}$ and a frame $\mathcal L_p=A_pe_{\mathcal L}$. Since $k$ is perfect, $\kappa(p)/k$ is finite separable and [F5] gives $\omega_{C,p}=A_p\,\mathrm dt$; by step 1.1 write $s_p=u(\mathrm dt\otimes e_{\mathcal L}^{-1})$ with $u\in A_p\setminus\{0\}$. Now define $n=\operatorname{ord}_p(u)\ge0$ and $v=t^{-n}u\in A_p^\times$, whose residue $v(0)\in\kappa(p)^\times$ is nonzero. [F4, F5, step 1.1, step 1.2]

3.1 The residue field $\kappa=\kappa(p)$ is finite over $k$ and separable because $k$ is perfect, so [F6] makes its trace form nondegenerate; since $v(0)\ne0$, choose $b\in\kappa^\times$ with $\operatorname{Tr}_{\kappa/k}(b\,v(0))\ne0$. [F6, step 2.1]

4.1 Lift $b$ to a unit $u_b\in A_p^\times$ using the surjection $A_p\to\kappa$ with kernel $(t)$, and define $c_p=u_b t^{-(n+1)}e_{\mathcal L}\in\mathcal L_\eta/\mathcal L_p$, with $c_q=0$ for $q\ne p$. Its coefficient has valuation $-(n+1)<0$, so this is a nonzero principal part; by [F2] the finite-support family represents a class $[c]\in H^1(C,\mathcal L)$. [F2, F4, step 3.1]

5.1 Since $c$ is supported at $p$, $\langle[c],s\rangle=\operatorname{res}_p(c_ps)$; using $u=t^nv$ gives $c_ps_p=u_bt^{-(n+1)}u\,\mathrm dt=t^{-1}(u_bv)\,\mathrm dt$. The regular unit $u_bv$ has constant term $b\,v(0)$, so the coefficient of $t^{-1}$ in the full coefficient $t^{-1}(u_bv)$ is $b\,v(0)$; hence the coefficient-trace formula yields $\operatorname{res}_p(c_ps)=\operatorname{Tr}_{\kappa/k}(b\,v(0))\ne0$. [F2, F3, step 2.1, step 3.1, step 4.1]

6.1 By step 5.1 every nonzero $s$ gives a class $[c]$ with $\langle[c],s\rangle\ne0$, so the functional $\langle-,s\rangle$ is nonzero; the $k$-bilinear pairing of [F2] therefore defines an injective linear map $\Phi:H^0(C,\omega_C\otimes\mathcal L^{-1})\to H^1(C,\mathcal L)^*$. [F2, step 5.1]

7.1 If both spaces are finite-dimensional and have equal dimension, the injective $\Phi$ is an isomorphism; the pairing is then perfect, and a class in $H^1(C,\mathcal L)$ annihilated by every global dual section is zero. By [F2], a finite-support representative of the zero class lies in the diagonal image of a global meromorphic section of $\mathcal L$, including zero. [F2, step 6.1] ∎
