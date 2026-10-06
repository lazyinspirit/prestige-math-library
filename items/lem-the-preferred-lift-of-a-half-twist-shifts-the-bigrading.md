---
id: lem-the-preferred-lift-of-a-half-twist-shifts-the-bigrading
kind: lemma
title: "The preferred lift of a half twist shifts the bigrading by chi(-1,1)"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-basic-arcs-admissible-curves-and-normal-form
  - def-elementary-geometric-half-twist
  - def-curves-and-geometric-intersection-numbers-on-the-marked-disk
  - def-khovanov-seidel-bigraded-cover-and-bigraded-curves
  - lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action
  - def-khovanov-seidel-bigrading-cover-and-local-intersection-indices
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Lemma 3.14"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Lemma 3.14 with its proof and Figure 9, printed p. 24"
verification:
  precheck: pass
---

## Statement

Let $c$ be a curve joining two marked points, $\tau$ the half twist along $c$
(the elementary geometric half twist of [[def-elementary-geometric-half-twist]], supported in a regular neighbourhood of
$c$), and $\widetilde\tau$ its preferred lift to the cover $\widetilde P$ of
[[def-khovanov-seidel-bigraded-cover-and-bigraded-curves]]. Then
$$\widetilde\tau(\widetilde c)=\chi(-1,1)\widetilde c$$
for every bigrading $\widetilde c$ of $c$. For the following bigraded intersection-number consequence, assume AC
([[def-axiom-of-choice]]) as inherited from its well-definedness suppliers.
In particular, for $1\le k\le m$ and a basic arc of
[[def-basic-arcs-admissible-curves-and-normal-form]]
$\widetilde b_k$ and its preferred half-twisted image one has
$$I^{\mathrm{bigr}}\bigl(\widetilde b_k,\widetilde\tau_k(\widetilde c)\bigr) =(q_1^{-1}q_2)\,I^{\mathrm{bigr}}(\widetilde b_k,\widetilde c),$$
the factor responsible for the shift $u\mapsto u+1$ in the string tables.

## Facts & Assumptions
**Given:** A curve $c$ joining two marked points, its half twist $\tau$ with preferred lift $\widetilde\tau$, a bigrading $\widetilde c$, and the cover $\widetilde\pi:\widetilde P\to P$ classified by the cohomology class $C$ with $C([\mathbb RP^1\times\text{point}])=(1,0)$ and $C([\text{point}\times\lambda_z])=(-2,1)$.

[A1] AC is inherited for the bigraded intersection-number invariance used in [L3] ([[def-axiom-of-choice]]); the deck-element computation for the actual half twist uses only the specified cover and lift.

[L1] $\tau$ preserves $c$ and reverses its orientation; $\widetilde\tau$ is the unique lift acting trivially on the fibres over the tangent lines of $\partial D$ ([[def-khovanov-seidel-bigraded-cover-and-bigraded-curves]], [[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]).

[L2] A curve joining two marked points has a bigrading, and any two bigradings of it differ by a unique deck element; equivalently, isotopy classes of bigraded curves are acted on freely by $\mathbb Z^2$ ([[lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action]]).

[L3] Under AC for the supplied intersection-number invariance, the deck action changes local indices by translation, and the transformation rules of $I^{\mathrm{bigr}}$ are $I^{\mathrm{bigr}}(\widetilde f(\widetilde c_0),\widetilde f(\widetilde c_1))=I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1)$ for an actual boundary-fixed diffeomorphism $f$ (or its induced action on bigraded isotopy classes) and $I^{\mathrm{bigr}}(\widetilde c_0,\chi(r_1,r_2)\widetilde c_1)=q_1^{r_1}q_2^{r_2}I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1)$ ([[def-khovanov-seidel-bigrading-cover-and-local-intersection-indices]]).



## Proof

**Proof technique:** direct.

1.1 *The deck element exists and is unique.* Since $\tau(c)=c$, the preferred lift sends the bigrading $\widetilde c$ of $c$ to a bigrading $\widetilde\tau(\widetilde c)$ of the same curve $c$; by [L2] there is a unique $(r_1,r_2)\in\mathbb Z^2$ with $\widetilde\tau(\widetilde c)=\chi(r_1,r_2)\widetilde c$, and it is independent of the chosen bigrading because the deck group is abelian and acts freely. The whole content of the lemma is the computation of $(r_1,r_2)$. [L1, L2]

1.2 *The test loop in $P$ and its class.* Use the standard rotational half-twist representative along $c$, conjugated from a round support disk; its midpoint is its unique fixed point on $c$, its derivative there is $-I$, and it is the identity near $\partial D$. Choose the standard embedded path $\beta:[0,1]\to D\setminus\Delta$ from the boundary to that midpoint, as in source Figure 9, with nonzero endpoint tangents. Let $\pi\colon[0,2]\to P$ be the closed path $\pi(t):=\mathbb R\beta'(t)\ \ (0\le t\le1),\qquad \pi(t):=D\tau\bigl(\mathbb R\beta'(2-t)\bigr)\ \ (1\le t\le2),$ where $\mathbb R v$ denotes the tangent line spanned by $v$; the two halves match at $t=1$ because $D\tau=-I$ at the midpoint fixes every projective tangent line, and the endpoint lines at the boundary match because $\tau$ is the identity nearby, and $\pi$ is a loop in $P$. For this standard path, the source's Figure 9 computation gives $[\pi]=-[\mathbb RP^1\times\mathrm{point}]-[\mathrm{point}\times\lambda_z]$ for one endpoint $z$ of $c$; this is the literature calculation in Khovanov--Seidel Lemma half-twist, printed pp. 24--25. Transport by the support-disk coordinates preserves its value under the covering class because all positive puncture loops have monodromy $(-2,1)$. [L1]


2.1 *The value of the deck element.* By the definition of the local index and the preferred lift, the deck element $(r_1,r_2)$ comparing $\widetilde\tau(\widetilde c)$ with $\widetilde c$ is obtained by evaluating the classifying class $C$ on the loop of tangent lines swept by the preferred lift of $\tau$ along $c$, which is the class $[\pi]$ of step 1.2; hence $(r_1,r_2)=-C([\pi])=C([\mathbb RP^1\times\text{point}])+C([\text{point}\times\lambda_z])=(1,0)+(-2,1)=(-1,1)$. This proves the main formula. [step 1.1, step 1.2]

3.1 *The consequence for the string tables.* The half twist $\tau_k$ along $b_k$ is the preferred lift acting on bigraded curves, so by [L3] and the main formula $I^{\mathrm{bigr}}\bigl(\widetilde b_k,\widetilde\tau_k(\widetilde c)\bigr) =I^{\mathrm{bigr}}\bigl(\widetilde\tau_k^{-1}\widetilde b_k,\widetilde c\bigr) =I^{\mathrm{bigr}}\bigl(\chi(1,-1)\widetilde b_k,\widetilde c\bigr) =(q_1^{-1}q_2)I^{\mathrm{bigr}}\bigl(\widetilde b_k,\widetilde c\bigr),$ where the first equality uses the invariance of $I^{\mathrm{bigr}}$ under the preferred lifts and the second uses that $\widetilde\tau_k^{-1}$ acts on $\widetilde b_k$ by $\chi(1,-1)$ by the main formula applied at index $k$. Applied to a $k$-string, this is the factor $(q_1^{-1}q_2)^u$ of the source's table. For other representatives of the same half-twist class, the same identities hold on bigraded isotopy classes by the homotopy-lifting and freeness suppliers. AC is inherited for the supplied bigraded intersection-number invariance in this consequence. [A1, step 2.1, L3] ∎
