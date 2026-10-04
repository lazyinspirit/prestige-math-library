---
id: thm-j-invariant-classifies-complex-tori
kind: theorem
title: "The j-invariant classifies complex tori"
status: published
origin: pipeline
deps:
  - def-modular-discriminant-and-j-invariant
  - thm-level-one-valence-formula
  - thm-ring-of-level-one-modular-forms
  - def-modular-group-action-on-the-upper-half-plane
  - thm-standard-fundamental-domain-for-the-modular-group
  - def-complex-lattice-and-complex-torus
  - thm-complex-torus-quotient-is-well-defined
  - def-weierstrass-elliptic-p-function
  - thm-weierstrass-p-differential-equation
  - thm-complex-torus-weierstrass-cubic-isomorphism
  - thm-weierstrass-lattice-discriminant-is-nonzero
  - def-covering-map-and-evenly-covered-neighbourhoods
  - thm-covering-space-lifting-criterion
  - cor-entire-biholomorphisms-are-affine
  - def-biholomorphic-map
  - thm-local-normal-form-holomorphic-map
  - cor-injective-holomorphic-derivative-nonzero
  - thm-convex-subsets-have-trivial-fundamental-group
  - thm-compactness-under-continuous-maps
  - lem-modular-quotient-local-charts
  - lem-discriminant-is-a-nonvanishing-cusp-form
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Remark 4.4, printed p. 49, and the lattice-homothety classification in Elliptic curves over C, pp. 123–124."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Theorems 5.26 and 5.33, printed pp. 93 and 97–98; Theorem 5.42 and j=1728J, pp. 103–104."
---

## Statement

For a full lattice $\Lambda\subset\mathbb C$ with oriented basis $(\omega_1,\omega_2)$ put $\tau=\omega_2/\omega_1\in\mathfrak H$ and $j(\Lambda):=j(\tau)$, with $j$ the modular function of [[def-modular-discriminant-and-j-invariant]]; this is well defined because another oriented basis changes $\tau$ by an element of $SL_2(\mathbb Z)$ and $j$ is invariant. For full lattices $\Lambda,\Lambda'$ the following are equivalent:
(i) $\Lambda'=c\Lambda$ for some $c\in\mathbb C^\times$ (the lattices are homothetic);
(ii) the complex tori $\mathbb C/\Lambda$ and $\mathbb C/\Lambda'$ are biholomorphic;
(iii) $j(\Lambda)=j(\Lambda')$.

## Facts & Assumptions

**Given:** Full lattices $\Lambda,\Lambda'$ with oriented bases, the complex tori $T_\Lambda,T_{\Lambda'}$ and their class maps $\pi,\pi'$ ([[def-complex-lattice-and-complex-torus]], [[thm-complex-torus-quotient-is-well-defined]]), and the modular function $j$ with $j(\gamma\tau)=j(\tau)$ for $\gamma\in SL_2(\mathbb Z)$ ([[def-modular-discriminant-and-j-invariant]], [[def-modular-group-action-on-the-upper-half-plane]]).

[F1] A change of oriented basis is an element of $SL_2(\mathbb Z)$ acting on $\tau=\omega_2/\omega_1$ by the associated Möbius transformation; hence $j(\Lambda)$ is well defined ([[def-complex-lattice-and-complex-torus]], [[def-modular-discriminant-and-j-invariant]]).

[F2] For $c\in\mathbb C^\times$, multiplication by $c$ maps $\Lambda$ onto $c\Lambda$ and induces a biholomorphism $T_\Lambda\to T_{c\Lambda}$; the oriented basis $(c\omega_1,c\omega_2)$ has ratio $\tau=\omega_2/\omega_1$ unchanged, so $j$ is a homothety invariant ([[def-complex-lattice-and-complex-torus]], [[def-biholomorphic-map]]).

[F3] For a lattice $\Lambda$, $\pi:\mathbb C\to T_\Lambda$ is a holomorphic covering map and $\mathbb C$ is simply connected; hence for any continuous $G:\mathbb C\to T_\Lambda$ and basepoint there is a unique based lift $f:\mathbb C\to\mathbb C$ ([[thm-complex-torus-quotient-is-well-defined]], [[def-covering-map-and-evenly-covered-neighbourhoods]], [[thm-convex-subsets-have-trivial-fundamental-group]], [[thm-covering-space-lifting-criterion]]).

[F4] Every biholomorphic self-map of $\mathbb C$ is affine $f(z)=az+b$, $a\ne0$ ([[cor-entire-biholomorphisms-are-affine]]); an injective holomorphic map has nowhere-vanishing derivative ([[cor-injective-holomorphic-derivative-nonzero]], [[thm-local-normal-form-holomorphic-map]]).

[F5] For $f=E_4^3-\mu\Delta$ with finite $\mu$, $f(\infty)=1$ and the valence sum is $1$. Moreover $f=\Delta(j-\mu)$ and $\Delta$ is nonzero on $\mathfrak H$. The invariant holomorphic function $j-\mu$ factors in each elliptic chart through $z^\nu$, where $\nu=2$ or $3$ ([[lem-modular-quotient-local-charts]]); consequently each zero of $f$ has order a positive multiple of $\nu$ at such a point, and weighted contribution at least $1$. At ordinary points its order is at least $1$. Thus $f$ has exactly one zero class ([[thm-level-one-valence-formula]], [[lem-discriminant-is-a-nonvanishing-cusp-form]], [[def-modular-discriminant-and-j-invariant]]).

[F6] $\Lambda_{\gamma\tau}=(c\tau+d)^{-1}\Lambda_\tau$ for $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in SL_2(\mathbb Z)$, directly from $\mathbb Z+\mathbb Z\gamma\tau=\mathbb Z+\mathbb Z\frac{a\tau+b}{c\tau+d}=(c\tau+d)^{-1}(\mathbb Z(c\tau+d)+\mathbb Z(a\tau+b))$ ([[def-complex-lattice-and-complex-torus]], [[def-modular-group-action-on-the-upper-half-plane]]); and $\dim M_{12}=2$ with $E_4^3,\Delta$ a basis ([[thm-ring-of-level-one-modular-forms]]).

## Proof

1.1 If $\Lambda'=c\Lambda$ then multiplication by $c$ is a biholomorphism $T_\Lambda\to T_{\Lambda'}$ by [F2], so (i) implies (ii). Writing $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2=\omega_1\Lambda_\tau$ with $\tau=\omega_2/\omega_1$, the lattice $\Lambda'$ has the same normalised parameter $\tau$, so $j(\Lambda')=j(\tau)=j(\Lambda)$; hence (i) implies (iii). If $\Lambda''$ is another basis of $\Lambda$, it is related to $(\omega_1,\omega_2)$ by a matrix in $SL_2(\mathbb Z)$ and the new parameter is $\gamma\tau$, so $j$ is unchanged by [F1]. [F1, F2, given, algebra]

2.1 Suppose (ii): let $F:T_\Lambda\to T_{\Lambda'}$ be a biholomorphism. Composing with a translation of $T_{\Lambda'}$ if necessary we may assume $F([0])=[0]$, since translations are biholomorphisms. Put $G:=F\circ\pi:\mathbb C\to T_{\Lambda'}$; as $\mathbb C$ is simply connected and $\pi'$ is a holomorphic covering [F3], there is a unique based lift $f:\mathbb C\to\mathbb C$ with $\pi'\circ f=G$ and $f(0)=0$. Similarly the inverse $F^{-1}$ admits a based lift $\widetilde f$ with $\widetilde f(0)=0$. Both $\widetilde f\circ f$ and the identity are based lifts of $F^{-1}\circ F\circ\pi=\pi=\pi\circ\operatorname{id}$, so by uniqueness $\widetilde f\circ f=\operatorname{id}$, and symmetrically $f\circ\widetilde f=\operatorname{id}$; thus $f$ is a biholomorphism of $\mathbb C$ (it is holomorphic because locally it is a branch of the holomorphic covering $\pi'$ composed with $G$). By [F4] $f(z)=az+b$ with $a\ne0$, and $f(0)=0$ gives $b=0$, so $f(z)=az$. For every $\lambda\in\Lambda$, $\pi'(f(z+\lambda))=G(z+\lambda)=G(z)$ because $\pi$ is $\Lambda$-periodic, so $f(z+\lambda)-f(z)=a\lambda\in\ker\pi'=\Lambda'$; hence $a\Lambda\subseteq\Lambda'$. Applying the same argument to $\widetilde f$, whose affine form is $a^{-1}z$, gives $a^{-1}\Lambda'\subseteq\Lambda$, so $a\Lambda=\Lambda'$ and $\Lambda'$ is homothetic to $\Lambda$: (ii) implies (i). [F2, F3, F4, step 1.1, given, algebra]

3.1 Suppose (iii): $j(\tau)=j(\tau')$ where $\Lambda=\omega_1\Lambda_\tau$, $\Lambda'=\omega_1'\Lambda_{\tau'}$; set $\mu=j(\tau)=j(\tau')$. The form $f:=E_4^3-\mu\Delta\in M_{12}$ has $f(\tau)=0=f(\tau')$ and $f(\infty)=1$, so $f\ne0$ and by [F5] all zeros of $f$, in particular $\tau$ and $\tau'$, lie in one $PSL_2(\mathbb Z)$-class: there is $\gamma\in SL_2(\mathbb Z)$ with $\tau'=\gamma\tau$. Then $\Lambda_{\tau'}=\Lambda_{\gamma\tau}=(c\tau+d)^{-1}\Lambda_\tau$ by [F6] is homothetic to $\Lambda_\tau$, hence $\Lambda'$ is homothetic to $\Lambda$ and (i) holds. The three implications close the equivalence. [F5, F6, step 2.1, given, algebra] ∎
