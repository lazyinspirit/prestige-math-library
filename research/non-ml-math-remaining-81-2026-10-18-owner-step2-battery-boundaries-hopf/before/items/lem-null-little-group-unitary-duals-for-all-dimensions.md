---
id: lem-null-little-group-unitary-duals-for-all-dimensions
kind: lemma
title: Null little-group unitary duals, including low dimensions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
proof_strategy: direct
axiom_use: >-
  AC is inherited from Mackey induction and Schur's lemma. The orbit and
  stabilizer calculations themselves use no choice beyond the fixed vectors.
deps:
  - def-axiom-of-choice
  - def-connected-poincare-cover-and-positive-energy
  - lem-lorentz-stabilizers-and-connected-cover-preimages
  - lem-mackey-induction-classification-for-regular-euclidean-duals
  - thm-schurs-lemma-for-unitary-representations
  - lem-continuous-characters-of-the-real-line-are-exponentials
  - thm-complex-nth-roots-and-roots-of-unity
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.2–§3.3, PDF pp. 11–15, and Appendix B §§B.2–B.3, PDF pp. 55–58; the local proof supplies full cover preimages and D=2,3 cases."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.15–4.16 (PDF pp. 63–64), D=4 helicity and continuous-spin discussion; the local proof supplies both cover parities and low dimensions."

---

## Statement

Let $D\ge2$, let $K\to SO_0(D-1,1)$ be a connected cover, and let $p$ be a nonzero future null momentum. Write $K_p$ for its full stabilizer preimage. The unitary-equivalence classes of irreducible strongly continuous unitary representations of $K_p$ are as follows.

- If $D\ge4$, put $n=D-2$. By [[lem-lorentz-stabilizers-and-connected-cover-preimages]], $K_p=\mathbb R^n\rtimes C$, where $C=SO(n)$ for the base Lorentz group and $C=\mathrm{Spin}(n)$ for its universal double cover; for $n=2$, $\mathrm{Spin}(2)=\mathbb R/(4\pi\mathbb Z)$. Let $\widehat{\mathbb R^n}$ be identified with $\mathbb R^n$ by its Euclidean characters $\chi_\xi(v)=e^{i\xi\cdot v}$. The $C$-orbits are $\{0\}$ and the spheres $|\xi|=\rho>0$. Over $0$ the little-group representations are all irreducible strongly continuous unitary representations of $C$. Over $\rho>0$, choose $\xi=\rho e_1$ and let $C_\xi$ be its stabilizer. For $C=SO(n)$, $C_\xi=SO(n-1)$ (with $SO(1)=\{1\}$); for $C=\mathrm{Spin}(n)$, $C_\xi$ is the full inverse image of $SO(n-1)$, namely $\mathrm{Spin}(n-1)$ for $n\ge3$, and $\{\pm1\}$ for $n=2$. The representations over this sphere are exactly
  $$\operatorname{Ind}_{\mathbb R^n\rtimes C_\xi}^{\mathbb R^n\rtimes C}(\chi_\xi\otimes\tau),$$
  with $\tau$ any irreducible strongly continuous unitary representation of $C_\xi$; at the fixed representative $\xi$, equivalence is exactly equivalence of $\tau$. In particular, the base $D=4$ group has one representation for each $\rho>0$, while the double-cover group has two, corresponding to the two characters of $\{\pm1\}$. Every $\rho>0$ induced Hilbert space is infinite-dimensional.
In each $\rho>0$ model, a little translation $v\in\mathbb R^n$ acts over $\eta\in S_\rho$ by the multiplier $e^{i\eta\cdot v}$, so the little translations act nontrivially.
- If $D=3$, for $K_N=\widetilde L/\langle z^N\rangle$ the null stabilizer is $\mathbb R\times(\mathbb Z/N\mathbb Z)$; for $K_\infty=\widetilde L$ it is $\mathbb R\times\mathbb Z$. Every irreducible representation is the character
  $$\theta_{t,\alpha}(u,j)=e^{itu}e^{2\pi i\alpha j},\qquad t\in\mathbb R.$$
  For finite $N$, $\alpha\in\frac1N\mathbb Z/\mathbb Z$; for $N=\infty$, $\alpha\in\mathbb R/\mathbb Z$. Thus $t>0$ and $t<0$ give inequivalent nontrivial null-translation characters, no rotation identifies the signs, and the central phase is an independent parameter. These little-group spaces are one-dimensional.
- If $D=2$, the two nonzero future null rays have trivial stabilizer and hence have the single trivial little-group representation each.

Here induced representations and their equivalences are those of [[lem-mackey-induction-classification-for-regular-euclidean-duals]]. The $D\ge4$ statement concerns the full inverse-image group for each of the two connected Lorentz covers, not just its Lie algebra.

## Facts & Assumptions

**Given:** A connected Lorentz cover, a nonzero future null $p$, and the conventions in [[def-connected-poincare-cover-and-positive-energy]].

[F1] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: for $D\ge4$, the null preimages are $\mathbb R^{D-2}\rtimes SO(D-2)$ and $\mathbb R^{D-2}\rtimes\mathrm{Spin}(D-2)$; for $D=3$ they are $\mathbb R\times(\mathbb Z/N\mathbb Z)$ and $\mathbb R\times\mathbb Z$; for $D=2$ they are trivial. The supplier's proof computes the needed rotation-cover inclusions on fundamental groups.

[F2] [[lem-mackey-induction-classification-for-regular-euclidean-duals]]: if a second-countable locally compact group acts linearly on $\mathbb R^d$ with countably separated dual orbits, every irreducible representation of the semidirect product is induced from a dual orbit and an irreducible representation of its closed stabilizer; the induced representation is irreducible, and its equivalence class is determined by the orbit and stabilizer representation.

[F3] [[thm-schurs-lemma-for-unitary-representations]]: under AC, a bounded operator commuting with an irreducible unitary representation is scalar.

[F4] [[lem-continuous-characters-of-the-real-line-are-exponentials]]: every continuous character of $\mathbb R$ is $u\mapsto e^{2\pi i\xi u}$ for a unique $\xi\in\mathbb R$.

[F5] [[thm-complex-nth-roots-and-roots-of-unity]]: the $N$th roots of unity are exactly $e^{2\pi i k/N}$ for $k=0,\ldots,N-1$.

[A1] AC is used by [F2] and [F3], as declared by those suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** A connected Lorentz cover and a fixed nonzero future null momentum $p$.

1.1 Suppose $D\ge4$ and put $n=D-2$. By [F1] the stabilizer group is $E=\mathbb R^n\rtimes C$ with $C$ acting through rotations on $\mathbb R^n$. Under Euclidean character coordinates, the dual action is $\xi\mapsto c\xi$. It has orbits $\{0\}$ and the spheres $S_\rho=\{\xi:|\xi|=\rho\}$: norm is invariant, and $SO(n)$ acts transitively on each unit sphere by extending any unit vector to an oriented orthonormal basis; the cover $C$ has the same orbits because it maps onto $SO(n)$. The rational sublevel sets $\{|\xi|<r\}$, $r\in\mathbb Q_{>0}$, together with $\{0\}$ form a countable invariant Borel family separating these orbits. At $\xi=\rho e_1$, its stabilizer is $\pi^{-1}(SO(n-1))$ for the covering rotation map $\pi:C\to SO(n)$. If $C=SO(n)$ this is $SO(n-1)$. If $C=\mathrm{Spin}(n)$ and $n\ge4$, the inclusion $SO(n-1)\hookrightarrow SO(n)$ induces an isomorphism on $\pi_1$ by the sphere-fibration calculation in [F1], so this preimage is connected and is the universal cover $\mathrm{Spin}(n-1)$. For $n=3$, its preimage over $SO(2)$ is the connected double circle $\mathrm{Spin}(2)$ (the lifted $2\pi$ rotation ends at the nontrivial deck element); for $n=2$, $SO(n-1)=SO(1)=\{1\}$ and the preimage is the two-element kernel $\{\pm1\}$. [F1, given, construct, algebra]

1.2 Suppose $D=3$. By [F1] the null stabilizer is $A=\mathbb R\times C_N$, where $C_N=\mathbb Z/N\mathbb Z$ or $\mathbb Z$, and the action is direct-product action because $SO(1)$ is trivial. The group $A$ is abelian. For any irreducible strongly continuous unitary representation $\pi$ of $A$, every $\pi(a)$ commutes with all $\pi(b)$; [F3] makes $\pi(a)$ scalar. Thus $\pi$ is one-dimensional and is a continuous character of each factor. By [F4], its real-line factor is $u\mapsto e^{itu}$ for a unique $t\in\mathbb R$ (put $t=2\pi\xi$). Since the action on $\widehat{\mathbb R}$ is trivial, rational intervals in the real character coordinate form a countable invariant Borel family separating all its singleton orbits, so [F2] applies to this semidirect product as well. [F1, F2, F3, F4, given]

2.1 The hypotheses of [F2] hold for $E$: $C$ is second-countable locally compact, the action is continuous, and step 1.1 gives countably separated dual orbits. Applying [F2] therefore gives every irreducible over $\{0\}$ as an irreducible representation of $C$ with trivial $\mathbb R^n$ action, and every irreducible over $S_\rho$ as $\operatorname{Ind}_{\mathbb R^n\rtimes C_\xi}^{E}(\chi_\xi\otimes\tau)$ for an irreducible $\tau$ of $C_\xi$. The equivalence criterion in [F2] says that the orbit radius and, at fixed $\xi$, the class of $\tau$ determine the representation exactly. In this induced model, a little translation $v\in\mathbb R^n$ acts over the orbit point $\eta\in S_\rho$ by multiplication by $e^{i\eta\cdot v}$. The application of Mackey and Schur here inherits AC through [F2], [F3] and [A1]. [F1, F2, F3, A1, step 1.1]

2.2 If $C_N=\mathbb Z/N\mathbb Z$, [F5] lists its possible generator values as $e^{2\pi i k/N}$ with $k=0,\ldots,N-1$, so its characters are $j\mapsto e^{2\pi i\alpha j}$ with $\alpha=k/N$ modulo $1$; these are precisely the parameters satisfying $N\alpha\in\mathbb Z$. If $C_N=\mathbb Z$, a character is determined by its arbitrary value $e^{2\pi i\alpha}$ at $1$, with $\alpha\in\mathbb R/\mathbb Z$. The two factors commute and every pair of factor characters multiplies to a character of the direct product, so these formulas give all and only the displayed $\theta_{t,\alpha}$. They are inequivalent unless both parameters agree in their respective parameter spaces. [F1, F4, F5, step 1.2, algebra]

3.1 For $n=2$, $SO(2)$ fixes a nonzero vector only at the identity, whereas in its connected double cover $\mathrm{Spin}(2)$ the full inverse image of that identity is its two-element kernel. This stabilizer is abelian, so [F3] makes every irreducible unitary representation one-dimensional; its generator must act by a scalar $\lambda$ with $\lambda^2=1$, and [F5] gives exactly $\lambda=\pm1$. The base stabilizer is trivial and has only its identity representation. For every $n\ge2$, $C$ is compact: this is immediate for $SO(n)$ and for $\mathrm{Spin}(2)$, and for $n\ge3$ the universal cover $\mathrm{Spin}(n)\to SO(n)$ has two sheets by [F1]; a finite-sheeted cover of compact $SO(n)$ is compact, since finitely many relatively compact neighborhoods whose closures lie in evenly covered charts cover $SO(n)$, and their compact closures lift to finitely many compact sheets. The closed subgroup $C_\xi$ is compact, and the continuous bijection $C/C_\xi\to S_\rho$ is a homeomorphism because its domain is compact and its codomain Hausdorff. Since $\mathbb R^n$ is in the inducing subgroup, $E/(\mathbb R^n\rtimes C_\xi)\to C/C_\xi$, $(v,c)(\mathbb R^n\rtimes C_\xi)\mapsto cC_\xi$, is a homeomorphism; hence the full-support Radon measure of [F2] is a full-support finite measure on the positive-dimensional sphere. Choose countably many pairwise disjoint nonempty open spherical caps along an arc converging to one point; each has positive measure and its indicator is a nonzero $L^2$ function. For a unit vector $w$ in the nonzero space $V_\tau$, the functions $1_{U_j}w$ are pairwise orthogonal, so the induced Hilbert space is infinite-dimensional. [F1, F2, F3, F5, step 2.1, construct]

3.2 The discrete factor acts trivially on the real translation dual, so it cannot map the character $u\mapsto e^{itu}$ to $u\mapsto e^{-itu}$. For $t\ne0$, the two signs are distinct by uniqueness in [F4]. The parameter $\alpha$ belongs to the independent second direct-product factor. Each displayed character has one-dimensional carrier by definition. [F1, F4, step 2.2, algebra]

4.1 Fix $v=\pi e_1/\rho$. At $\eta=\rho e_1$, the multiplier from step 2.1 equals $e^{i\eta\cdot v}=-1$. By continuity it is different from $1$ on an open neighborhood of that point in $S_\rho$, and the full-support measure of the induced model assigns positive measure to this neighborhood. Thus the little translation representation is not the trivial representation for every $\rho>0$. [F2, step 2.1, step 3.1]

5.1 If $D=2$, [F1] says the nonzero future null stabilizer is the trivial group. It has exactly one irreducible unitary representation, the one-dimensional trivial representation. In light-cone coordinates the connected boost of rapidity $s$ sends $(p^0+p^1,p^0-p^1)$ to $(e^s(p^0+p^1),e^{-s}(p^0-p^1))$. The two future rays $(r,r)$ and $(r,-r)$, $r>0$, have respectively the second and first coordinate zero, so no boost carries one to the other. Combining the $D\ge4$ cases in steps 1.1, 2.1, 3.1 and 4.1, the $D=3$ cases in steps 1.2, 2.2 and 3.2, and the $D=2$ case just proved yields the stated null little-group classification in every dimension. [F1, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, given, algebra] ∎
