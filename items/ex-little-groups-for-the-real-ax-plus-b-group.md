---
id: ex-little-groups-for-the-real-ax-plus-b-group
kind: example
title: Little groups for the real $ax+b$ group and its orientation-preserving subgroup
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
proof_strategy: direct
deps:
  - cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup
  - thm-mackey-imprimitivity-theorem
  - thm-uniqueness-in-mackey-imprimitivity
  - def-external-semidirect-product
  - def-pontryagin-dual-and-compact-open-topology
  - lem-continuous-characters-of-the-real-line-are-exponentials
  - thm-dual-of-an-lca-group-is-locally-compact-abelian
  - def-strongly-continuous-unitary-representation
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - lem-spectral-measure-of-a-representation-of-an-abelian-lch-group
  - lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - thm-schurs-lemma-for-unitary-representations
  - lem-lca-fourier-transforms-form-a-dense-czero-algebra
  - def-axiom-of-choice
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - thm-bounded-borel-pvm-integral
  - lem-induced-representations-carry-a-canonical-system-of-imprimitivity
  - def-unitary-equivalence-of-systems-of-imprimitivity
  - def-coset
  - def-continuous-map-top
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters, arXiv:1912.07262 (AMS Mathematical Surveys and Monographs 250)"
      url: "https://arxiv.org/pdf/1912.07262"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
---

## Example

Assume AC. Let $G=\operatorname{Aff}(\mathbb R)=\mathbb R\rtimes\mathbb R^\times$,
$N$ its translation subgroup, and $K$ its dilation subgroup. Identify
$\widehat N\cong\mathbb R$ by $\chi_\lambda(x)=e^{i\lambda x}$. The dual action
is $\lambda\mapsto\lambda/k$, so the full group $K$ has two orbits, $\{0\}$ and
$\mathbb R\setminus\{0\}$, with stabilizers $K$ and $\{1\}$ respectively. Its
little groups are $G$ and $N$. The irreducible representations are the
one-dimensional characters $|a|^{it}\operatorname{sign}(a)^\delta$ for
$t\in\mathbb R$, $\delta\in\{0,1\}$, and one infinite-dimensional class
$\pi=\operatorname{Ind}_N^G\chi_1\cong\operatorname{Ind}_N^G\chi_{-1}$. For
the orientation-preserving group $G_0=\mathbb R\rtimes\mathbb R_{>0}$ the
nonzero dual orbits are separately $(0,\infty)$ and $(-\infty,0)$; they give
two inequivalent infinite-dimensional representations $\pi_1,\pi_{-1}$, alongside
the characters $a^{it}$. Thus
$\widehat G=(\mathbb R\times\{0,1\})\sqcup\{\pi\}$ and
$\widehat{G_0}=\mathbb R\sqcup\{\pi_1,\pi_{-1}\}$.

## Facts & Assumptions

**Given:** AC, the groups $G=\mathbb R\rtimes\mathbb R^\times$ and $G_0=\mathbb R\rtimes\mathbb R_{>0}$ with translation normal subgroup $N\cong\mathbb R$ and dilation quotient, and the identification $\widehat N\cong\mathbb R$ by $\chi_\lambda(x)=e^{i\lambda x}$.

[F1] The Euclidean dual is $\widehat{\mathbb R}\cong\mathbb R$ with $\chi_\lambda(x)=e^{i\lambda x}$, and every continuous character of $\mathbb R$ is of this form; the dual is locally compact abelian ([[lem-continuous-characters-of-the-real-line-are-exponentials]], [[thm-dual-of-an-lca-group-is-locally-compact-abelian]], [[def-pontryagin-dual-and-compact-open-topology]]).

[F2] The semidirect product has the normal translation subgroup $N$ and quotient $\mathbb R^\times$ (respectively $\mathbb R_{>0}$), acting on $N$ by $\alpha_k(x)=kx$; the dual action is $k\cdot\chi=\chi\circ\alpha_k^{-1}$ ([[def-external-semidirect-product]], [[def-strongly-continuous-unitary-representation]]).

[F3] The little-group corollary applies whenever the dual orbits are regular: for an abelian closed normal $N$ with $G$ second countable locally compact, every irreducible strongly continuous unitary representation of $G$ is induced from $\chi\otimes\theta$ on $H_\chi=N\rtimes K_\chi$ ([[cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup]]).

[F4] An induced representation carries the canonical multiplication PVM. Spectral PVM uniqueness, density of the Fourier transforms in $C_0(\widehat N)$, and the diagonal commutant theorem identify any bounded commutant operator of a one-dimensional inducing fibre with a scalar multiplication operator. Invariant scalar functions on a transitive quasi-invariant homogeneous space are constant a.e., by applying ergodicity to rational superlevel sets of their real and imaginary parts ([[lem-spectral-measure-of-a-representation-of-an-abelian-lch-group]], [[lem-lca-fourier-transforms-form-a-dense-czero-algebra]], [[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]], [[lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic]], [[lem-induced-representations-carry-a-canonical-system-of-imprimitivity]], [[thm-bounded-borel-pvm-integral]], [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

[F5] Every bounded self-intertwiner of an irreducible unitary representation is scalar. For an abelian group all representation operators commute with the representation, so irreducibility forces a one-dimensional representation. Characters of $\mathbb R$ are the exponentials of [F1]; logarithm identifies $\mathbb R_{>0}$ with the additive line, and the two-element sign group has characters $1$ and $\operatorname{sign}$ ([[thm-schurs-lemma-for-unitary-representations]], [[lem-continuous-characters-of-the-real-line-are-exponentials]]).

[F6] AC is the standing hypothesis ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** AC, the two groups and the identifications above.

1.1 The dual action is $(k\cdot\chi_\lambda)(b)=e^{i\lambda b/k}$, so the parameter is $\lambda/k$. For $K=\mathbb R^\times$ the orbits are $\{0\}$ and $\mathbb R^\times$, with stabilizers $K$ and $\{1\}$; for $K=\mathbb R_{>0}$ they are $\{0\}$, $(0,\infty)$, and $(-\infty,0)$, again with trivial nonzero stabilizers. Each partition is finite and Borel, hence regular, so [F3] makes the corresponding little-group inductions exhaustive. [F1, F2, F3, algebra]

2.1 At the zero character the inducing subgroup is $G$ and $N$ acts trivially. The irreducible quotient representations are one-dimensional by [F5]. Logarithm and the sign decomposition $\mathbb R^\times\cong\mathbb R_{>0}\times\{\pm1\}$ give $|a|^{it}\operatorname{sign}(a)^\delta$ for the full group and $a^{it}$ for the positive group. Distinct parameters give distinct characters: vary $\log a$ and then the sign. [F1, F3, F5, step 1.1]

2.2 For $\lambda\ne0$ use quotient coordinates $k\in K$ with section $s(k)=(0,k)$ and Haar measure $dk/|k|$ (restricted to $k>0$ for the positive group). The induced action on $L^2(K,dk/|k|)$ is $$(\pi_\lambda(b,a)f)(k)=e^{i\lambda b/k}f(k/a).$$ Indeed $s(k)^{-1}(b,a)s(k/a)=(b/k,1)$, and the quotient measure is invariant under $k\mapsto ak$, so its density factor is one. Finite scalar Borel measures on the real line are regular by [F4]. The spectral PVM of $N$ is multiplication by $\mathbf 1_E(\lambda/k)$: it is a regular PVM under the homeomorphism $k\mapsto\lambda/k$ onto the nonzero orbit, and its character integral is the displayed translation action, so [F4]'s spectral uniqueness identifies it. [F2, F4, step 1.1, algebra]

3.1 Let $A$ commute with $\pi_\lambda$. It commutes with all integrated $N$-operators, hence with their $C_0$ algebra by Fourier-transform density, and then with the spectral PVM. For the last inference, each unitary in the commutant conjugates $P$ to a regular PVM with the same integrated $N$-representation, hence preserves $P$ by spectral uniqueness. For a general commutant operator, its self-adjoint real and imaginary parts commute with $N$, and $e^{itS}$ for either part $S$ is a commuting unitary, by the norm-convergent power series. Differentiating that series at $t=0$ shows that $S$ commutes with $P$, and hence so does $A$. Thus $A$ commutes with all diagonal multiplications on $K$ and is $M_u$ for some bounded scalar $u$, by the diagonal commutant theorem. Commutation with $\pi_\lambda(0,a)$ makes $u(k/a)=u(k)$ a.e. for every $a\in K$. Transitive ergodicity, applied to rational superlevel sets of the real and imaginary parts, makes $u$ constant a.e. Thus the commutant is scalar; an invariant closed subspace would have a commuting orthogonal projection, so $\pi_\lambda$ is irreducible. Disjoint intervals in $\log|k|$ give infinitely many nonzero orthogonal indicator sections, proving infinite dimension. [F4, step 2.2]

4.1 For $r\in K$ put $(R_rf)(k)=f(rk)$. Haar invariance makes $R_r$ unitary, and the explicit formula gives $R_r\pi_\lambda(b,a)R_r^{-1}=\pi_{\lambda/r}(b,a)$. Thus parameters in one orbit give equivalent representations. For the full group $r=-1$ equates $\lambda=1$ and $\lambda=-1$; for the positive group no $r$ changes sign, and the two classes are inequivalent because their spectral PVMs have disjoint supports, by [F4]'s uniqueness. They are also inequivalent to the quotient characters, whose $N$-spectrum is $\{0\}$. [F4, step 2.1, step 2.2, step 3.1, algebra]

5.1 Exhaustiveness from step 1.1, the character classification of step 2.1, irreducibility and infinite dimension from step 3.1, and the equivalences of step 4.1 give $\widehat G=(\mathbb R\times\{0,1\})\sqcup\{\pi\}$ and $\widehat{G_0}=\mathbb R\sqcup\{\pi_1,\pi_{-1}\}$. [step 1.1, step 2.1, step 3.1, step 4.1, F6] ∎
