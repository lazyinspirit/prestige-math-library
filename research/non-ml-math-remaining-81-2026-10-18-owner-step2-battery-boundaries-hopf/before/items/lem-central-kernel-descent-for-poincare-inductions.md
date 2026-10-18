---
id: lem-central-kernel-descent-for-poincare-inductions
kind: lemma
title: Central kernel characters control descent of Poincaré inductions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
proof_strategy: direct
axiom_use: >-
  AC is inherited from the Mackey induction classification and Schur's lemma.
deps:
  - def-axiom-of-choice
  - def-connected-poincare-cover-and-positive-energy
  - def-covering-homomorphism-of-lie-groups
  - lem-lorentz-stabilizers-and-connected-cover-preimages
  - lem-mackey-induction-classification-for-regular-euclidean-duals
  - def-covariant-function-model-of-unitary-induction
  - lem-radon-nikodym-cocycle-of-a-homogeneous-measure
  - lem-the-induced-action-is-unitary
  - thm-schurs-lemma-for-unitary-representations
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.1–§3.3, PDF pp. 9–15, and Appendix B, PDF pp. 53–58; the local proof gives the exact global-kernel descent test."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.13–4.16 (PDF pp. 61–64), D=4 spin and helicity conventions; the local proof supplies the cover-kernel criterion."

---

## Statement

Let $c:K\to L=SO_0(D-1,1)$ be a connected Lorentz cover, $G=\mathbb R^D\rtimes K$ the connected-cover Poincaré group, and $\Gamma\le\ker c$. Put $\bar K=K/\Gamma$ and $\bar G=\mathbb R^D\rtimes\bar K$. Let $p\in\mathbb R^D$ and let $\theta$ be an irreducible strongly continuous unitary representation of $K_p=c^{-1}(L_p)$. Then
$$
\pi_{p,\theta}=\operatorname{Ind}_{\mathbb R^D\rtimes K_p}^{G}(\chi_p\otimes\theta)
$$
factors through $G\to\bar G$ if and only if $\theta(\gamma)=I$ for every $\gamma\in\Gamma$. Each such $\theta(\gamma)$ is scalar. This criterion applies separately to massive, null, and zero momentum; it does not assert extension to disconnected groups containing parity or time reversal.

In $D\ge4$, for the universal double cover and its nontrivial deck element $z$, $\theta(z)=\pm I$, and descent to the base Lorentz group is exactly the $+I$ case. In $D=3$, let $K_\infty=\widetilde L$ and $K_N=\widetilde L/\langle z^N\rangle$. On the massive little group $\mathbb R$, write $\theta_s(r)=e^{isr}$, $s\in\mathbb R$; it descends from $K_\infty$ to $K_N$ exactly when $Ns\in\mathbb Z$. On the null little group $\mathbb R\times\mathbb Z$, write $\theta_{t,\alpha}(u,j)=e^{itu}e^{2\pi i\alpha j}$; it descends exactly when $N\alpha\in\mathbb Z$, independently of $t$. On the zero orbit, descent of an arbitrary irreducible $K_\infty$ representation $\sigma$ is exactly $\sigma(z^N)=I$.

## Facts & Assumptions

**Given:** The connected cover, $\Gamma\le\ker c$, a momentum $p$, and an irreducible little-group representation $\theta$.

[F1] [[def-connected-poincare-cover-and-positive-energy]]: $G=\mathbb R^D\rtimes K$ with action through $c$, and translations have character $\chi_p(a)=e^{i\eta(p,a)}$.

[F2] [[def-covering-homomorphism-of-lie-groups]]: a covering homomorphism is a surjective homomorphism whose underlying map is a covering map, so its kernel is discrete.

[F3] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: $K_p=c^{-1}(L_p)$; in $D=3$ the universal-cover deck generator $z$ has massive coordinate $r=2\pi$ and null stabilizer coordinate $(0,1)$.

[F4] [[def-covariant-function-model-of-unitary-induction]]: inducing sections satisfy $F(xh)=(\chi_p\otimes\theta)(h)^{-1}F(x)$.

[F5] [[lem-radon-nikodym-cocycle-of-a-homogeneous-measure]] and [[lem-the-induced-action-is-unitary]]: $D_g(xH_p)$ is the continuous Radon–Nikodym density of the left action on $G/H_p$, and the induced action is $(U(g)F)(x)=D_g(xH_p)^{1/2}F(g^{-1}x)$.

[F6] [[thm-schurs-lemma-for-unitary-representations]]: under AC, every bounded operator commuting with an irreducible unitary representation is scalar.

[F7] [[lem-mackey-induction-classification-for-regular-euclidean-duals]]: the induced model uses a full-support quasi-invariant Radon measure on $G/H_p$.

[A1] AC is inherited through [F5] and [F6]. [[def-axiom-of-choice]]

## Proof

**Given:** $c:K\to L$, $\Gamma\le\ker c$, $p$, and $\theta$ as stated.

1.1 A covering homomorphism has discrete kernel by [F2]. For fixed $\gamma\in\ker c$ the map $k\mapsto k\gamma k^{-1}$ is continuous from connected $K$ into that discrete kernel; it is therefore constant, equal to $\gamma$. Thus $\ker c$, and hence $\Gamma$, is central in $K$. It acts trivially on translations because $c(\gamma)=1$, so $(0,\gamma)$ is central in $G$. Since $\gamma$ maps to the identity Lorentz transformation, it fixes $p$ and lies in $K_p$. [F1, F2, F3, given, construct]

2.1 In the induced model from [F4]–[F5], centrality gives $g_\gamma^{-1}x=xg_\gamma^{-1}$ for $g_\gamma=(0,\gamma)$. Since $\gamma\in K_p$, this action fixes every point of $G/H_p$, so it preserves the measure and its Radon–Nikodym derivative is $1$ almost everywhere. The density is continuous by [F5] and the measure has full support by [F7]; if the density differed from $1$ at a point, continuity would give a nonempty open set where it differed, which has positive measure, a contradiction. Thus the cocycle factor is $1$ everywhere. Covariance then yields $ (U(g_\gamma)F)(x)=F(xg_\gamma^{-1})=(\chi_p\otimes\theta)(g_\gamma^{-1})^{-1}F(x)=\theta(\gamma)F(x). $ Hence $U(g_\gamma)$ is the constant fibre operator $\theta(\gamma)$. Since $\gamma$ is central in $K_p$, $\theta(\gamma)$ commutes with the irreducible representation $\theta$; [F6] says it is scalar. AC is used here by the induction-action and Schur suppliers. [F3, F4, F5, F6, F7, A1, step 1.1]

3.1 A representation factors through $G/\{(0,\gamma):\gamma\in\Gamma\}\cong\bar G$ exactly when every element of this kernel acts as the identity: necessity follows by applying a factored representation to the identity coset, and sufficiency follows by defining the quotient action on cosets, which is well-defined precisely when the kernel acts trivially. By step 2.1 this is equivalent to $\theta(\gamma)=I$ for every $\gamma\in\Gamma$. [F1, step 2.1, algebra]

4.1 For $D\ge4$, the only nontrivial connected-cover kernel is the order-two deck group $\{1,z\}$ by [F3]. Since $z^2=1$, the scalar $\theta(z)$ from step 2.1 satisfies $\theta(z)^2=I$, hence is $+I$ or $-I$. Applying step 3.1 to $\Gamma=\{1,z\}$ proves the stated descent dichotomy. [F3, step 2.1, step 3.1, algebra]

4.2 In $D=3$, [F3] gives $z$ as rotation coordinate $2\pi$ in the massive universal-cover stabilizer $\mathbb R$ and as generator $(0,1)$ in the null stabilizer $\mathbb R\times\mathbb Z$. The massive character therefore has $\theta_s(z^N)=e^{2\pi iNs}$, which equals $1$ exactly when $Ns\in\mathbb Z$. The null character has $\theta_{t,\alpha}(z^N)=e^{2\pi iN\alpha}$, which equals $1$ exactly when $N\alpha\in\mathbb Z$; the parameter $t$ does not enter because $z$ has zero coordinate in the real null-translation factor. Step 3.1 gives both iff statements. [F3, step 3.1, algebra]

5.1 At zero momentum, $K_p=K$ and the inducing representation is an arbitrary irreducible $\sigma$ of $K_\infty$. Applying step 3.1 with $\Gamma=\langle z^N\rangle$ gives descent exactly when $\sigma(z^N)=I$. In $D=2$ the Lorentz group has no nontrivial connected cover kernel, so there is no additional descent condition. These cases exhaust the stated consequences of the general criterion. [F3, step 3.1, given] ∎
