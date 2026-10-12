---
id: thm-nrqm-identical-particles-finite-mode-occupation-counts
aliases: [nrqm-identical-particles-finite-mode-occupation-counts]
kind: theorem
domain: mathematics
title: "Finite-mode occupation configurations: fermionic exclusion counts, bosonic counts and truncated dimensions"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-nrqm-identical-particles-occupation-number-basis, lem-nrqm-composites-permutation-sector-projections, def-binomial-coefficient, thm-binomial-closed-formula, thm-stars-and-bars, thm-pascals-rule, cor-binomial-theorem-consequences, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-identical-particles-occupation-number-basis: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-binomial-coefficient: mathematical-premise
  thm-binomial-closed-formula: mathematical-premise
  thm-stars-and-bars: mathematical-premise
  thm-pascals-rule: mathematical-premise
  cor-binomial-theorem-consequences: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Chapter 1 Sections 1.2-1.3 pp. 5-9: occupation-number states, the two sectors and the exclusion of repeated fermionic occupations"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1 printed pages 226-228 (PDF pages 234-236): the antisymmetric expansion of a pair state and the vanishing amplitude of a repeated single-particle state"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II, Michaelmas 2021), Chapter 7 'Identical Particles', pp. 4-10: Slater determinants, occupations and the filling of single-particle levels; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
      url: "https://web.archive.org/web/20240801085112id_/https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space of finite dimension $d\ge1$ with orthonormal basis
$(e_1,\dots,e_d)$ ([[def-hilbert-space]]), let $H^{\otimes n}$ and
$P_\pm^{(n)}$ be as in
[[thm-nrqm-identical-particles-occupation-number-basis]] (with
$P_\pm^{(0)}=\mathrm{id}_{\mathbb C}$), and let $W(n,d)=\{\lambda\in\mathbb N^d:\sum_j\lambda_j=n\}$
and $m_\lambda$ be the symmetric vectors of that theorem. Then:

(a) *fermionic configurations*: the map $J\mapsto\mathbf 1_J$ is a bijection
from the set of $n$-element subsets of $\{1,\dots,d\}$ onto the set
$\{\lambda\in\{0,1\}^d:\sum_j\lambda_j=n\}$; consequently
$$\dim\operatorname{ran}P_-^{(n)}=\#\{\lambda\in\{0,1\}^d:\textstyle\sum_j\lambda_j=n\},\qquad \sum_{n=0}^{d}\dim\operatorname{ran}P_-^{(n)}=2^{d};$$

(b) *bosonic configurations*: the assignment $\lambda\mapsto m_\lambda$ induces
a bijection from $W(n,d)$ onto the set of lines spanned by the orthogonal basis
$(m_\lambda)$, so the number of bosonic configurations of total occupation
exactly $n$ is $\binom{n+d-1}{n}=\binom{n+d-1}{d-1}$, and for every $N\ge0$ the
number of bosonic configurations of total occupation at most $N$ is
$$\sum_{n=0}^{N}\dim\operatorname{ran}P_+^{(n)}=\sum_{n=0}^{N}\binom{n+d-1}{d-1}=\binom{N+d}{d};$$

(c) *exclusion counts*: no fermionic configuration has an entry $\ge2$, so the
antisymmetric Slater index set contains no $\lambda$ with $\lambda_j\ge2$ for
some $j$; for $n>d$ there is no fermionic configuration at all and
$\operatorname{ran}P_-^{(n)}=\{0\}$, while for every $n$ and every $j$ the
bosonic configuration with $\lambda_j=n$ and all other entries $0$ occurs, so
no occupation bound holds in the symmetric sector;

(d) *consistency with the total occupation*: for every $\lambda\in W(n,d)$ one
has $\sum_j\lambda_j=n$, and for every fermionic configuration
$\lambda\in\{0,1\}^d\cap\{\sum_j\lambda_j=n\}$ likewise; in particular the
total occupation equals the particle number $n$ in both sectors.

## Facts & Assumptions

**Given:** The finite-dimensional complex Hilbert space $H$ of dimension $d\ge1$ with orthonormal basis $(e_1,\dots,e_d)$, the sectors $\operatorname{ran}P_\pm^{(n)}$ of the cited theorem, and $n,N\ge0$.

[F1] **Occupation basis.** The Slater vectors $e_J^\wedge$, $J\subseteq\{1,\dots,d\}$ with $|J|=n$, form an orthonormal basis of $\operatorname{ran}P_-^{(n)}$, and $\dim\operatorname{ran}P_-^{(n)}=\binom dn$ with $\operatorname{ran}P_-^{(n)}=\{0\}$ for $n>d$; the symmetric vectors $(m_\lambda)_{\lambda\in W(n,d)}$ form an orthogonal basis of $\operatorname{ran}P_+^{(n)}$ with $\dim\operatorname{ran}P_+^{(n)}=\binom{n+d-1}{n}$; each $e_J^\wedge$ has occupation vector $\mathbf 1_J$ and each $m_\lambda$ has occupation vector $\lambda$ ([[thm-nrqm-identical-particles-occupation-number-basis]] clauses (b),(c),(d)).

[F2] **Binomial counts and symmetry.** $\binom dn$ is the number of $n$-element subsets of $\{1,\dots,d\}$ ([[def-binomial-coefficient]]), and $\binom{n+d-1}{d-1}=\binom{n+d-1}{n}$ ([[thm-binomial-closed-formula]] clause 3, with $N=n+d-1$ and $k=d-1$).

[F3] **Weak compositions.** For $m\ge1$ and $n\in\mathbb N$, $|W(n,m)|=\binom{n+m-1}{m-1}$ ([[thm-stars-and-bars]]).

[F4] **Pascal rule and hockey stick.** For all $n,k\in\mathbb N$, $\binom{n+1}{k+1}=\binom nk+\binom n{k+1}$ and $\sum_{i<n+1}\binom ik=\binom{n+1}{k+1}$ as an $\mathbb N$-valued finite sum ([[thm-pascals-rule]]); the sector formula of the theorem is stated for the finite sums there defined.

[F5] **Row sum.** $\sum_{k<n+1}\binom nk=2^n$ in $\mathbb N$ ([[cor-binomial-theorem-consequences]] clause 1).

## Proof

**Proof technique:** direct; compare the two index sets of the occupation basis with the configuration sets, count them with the cited finite-counting facts, and read the vanishing statement off the antisymmetric sector.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Fermionic configurations] Let $J\subseteq\{1,\dots,d\}$ have $|J|=n$; its indicator $\mathbf 1_J$ lies in $\{0,1\}^d$ with $\sum_j\mathbf 1_J(j)=n$. Conversely, if $\lambda\in\{0,1\}^d$ has $\sum_j\lambda_j=n$, then $J_\lambda:=\{j:\lambda_j=1\}$ satisfies $|J_\lambda|=n$ and $\mathbf 1_{J_\lambda}=\lambda$. The two assignments are inverse bijections, so the number of fermionic configurations of total occupation $n$ equals the number of $n$-element subsets, which is $\binom dn$ by [F2]; by [F1] this is $\dim\operatorname{ran}P_-^{(n)}$, which is the first assertion of (a). [F1, F2, algebra, construct]

1.2 [Bosonic configurations] The assignment $\lambda\mapsto m_\lambda$ is injective by the linear independence of the orthogonal family [F1], and its image spans $\operatorname{ran}P_+^{(n)}$, so it is a bijection onto the set of basis lines; the number of its elements is $|W(n,d)|=\binom{n+d-1}{d-1}=\binom{n+d-1}{n}$ by [F3] and [F2], the first assertion of (b). [F1, F2, F3, algebra]

2.1 [Fermionic row sum] Summing the dimensions over all particle numbers and using [F1] for $n\le d$ and the vanishing for $n>d$ gives $\sum_{n=0}^d\dim\operatorname{ran}P_-^{(n)}=\sum_{n=0}^d\binom dn=2^d$ by the row sum [F5], which completes (a). [F1, F5, step 1.1, algebra]

2.2 [Truncated bosonic dimension] For every $n$ the dimension $\dim\operatorname{ran}P_+^{(n)}=\binom{n+d-1}{n}=\binom{n+d-1}{d-1}$ is given by step 1.2 and [F2]; hence $\sum_{n=0}^{N}\dim\operatorname{ran}P_+^{(n)}=\sum_{n=0}^{N}\binom{n+d-1}{d-1}$. Substituting $i:=n+d-1$, the terms with $i<d-1$ vanish by the boundary values of the binomial coefficient, so the hockey stick [F4] with $k=d-1$ and upper index $N+d-1$ gives $\sum_{i=0}^{N+d-1}\binom{i}{d-1}=\binom{N+d}{d}$; this completes (b). [F2, F4, step 1.2, algebra]

2.3 [Exclusion counts] By construction every fermionic configuration lies in $\{0,1\}^d$, so no entry is $\ge2$; for $n>d$ the set $\{0,1\}^d\cap\{\sum_j\lambda_j=n\}$ is empty because at most $d$ entries can be equal to $1$, and then $\operatorname{ran}P_-^{(n)}=\{0\}$ by [F1], while for the bosonic sector the configuration $\lambda^{(j)}$ with $\lambda^{(j)}_j=n$ and all other entries $0$ lies in $W(n,d)$ for every $j$, so no occupation bound holds there; this is (c). [F1, step 1.1, step 1.2, algebra]

3.1 [Consistency and assembly] Each $\lambda\in W(n,d)$ satisfies $\sum_j\lambda_j=n$ by definition, and each fermionic configuration in $\{0,1\}^d\cap\{\sum_j\lambda_j=n\}$ does so as well, which is (d); step 1.1 and 2.1 prove (a), steps 1.2 and 2.2 prove (b), and step 2.3 proves (c). Only the cited spectral basis and finite-counting facts were used. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, algebra] ∎

## Remarks

- **Reading.** The theorem is the finite-mode bookkeeping behind the
  occupation-number description: for a $d$-mode one-particle space there are
  $\binom dn$ antisymmetric $n$-particle sector dimensions and
  $\binom{n+d-1}{n}$ symmetric ones, and the antisymmetric configurations have
  all occupations in $\{0,1\}$ while the symmetric ones do not. The physical
  reading of the occupations as a readout of the framework is fixed on
  [[def-nrqm-identical-particles-framework-orbital-occupation-model]] and
  [[pthm-nrqm-identical-particles-orbital-occupation-exclusion]].
- **Truncation.** The sums over $n\le N$ are finite sums of finite
  dimensions; no infinite Fock space and no convergence statement is made
  here.
