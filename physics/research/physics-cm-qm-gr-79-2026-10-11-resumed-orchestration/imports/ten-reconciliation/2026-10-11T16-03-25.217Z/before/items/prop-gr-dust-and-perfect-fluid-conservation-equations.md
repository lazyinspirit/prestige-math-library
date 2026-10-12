---
id: prop-gr-dust-and-perfect-fluid-conservation-equations
kind: proposition
title: "Divergence-free dust is exactly the dust system, and divergence-free perfect fluid is exactly the fluid equations"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-dust-matter-model, def-gr-perfect-fluid-matter-model, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]
dependency_roles:
  def-gr-dust-matter-model: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.2, exercise on the equivalence of nabla_a T^{ab}=0 with the continuity and Euler equations (6.31) for a perfect fluid, printed pp. 65-66 (PDF pp. 66-67)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.4: the two relations (4.54)-(4.55) equivalent to nabla_mu T^{mu nu}=0, printed pp. 185-187 (PDF pp. 192-194)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$ and let $U\subseteq M$ be a nonempty open
matter domain ([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

**(a) Dust.** Let $(\rho,u,T)$ be a dust model on $U$
([[def-gr-dust-matter-model]]). Then

$$\nabla^aT_{ab}=0\ \text{on }U\qquad\Longleftrightarrow\qquad \nabla_a(\rho u^a)=0\ \text{and}\ u^a\nabla_au^b=0\ \text{on }U .$$

**(b) Perfect fluid.** Let $(\varepsilon,p,n,T)$ be a perfect-fluid model on
$U$ with comoving derivative $D$, expansion $\vartheta$, acceleration $a$ and
projection $h$ ([[def-gr-perfect-fluid-matter-model]]). Then

$$\nabla^aT_{ab}=0\ \text{on }U\qquad\Longleftrightarrow\qquad D\varepsilon+(\varepsilon+p)\vartheta=0\quad\text{and}\quad (\varepsilon+p)a^b+h^{ba}\partial_ap=0\ \text{on }U .$$

## Facts & Assumptions

**Given:** The time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, the open matter domain $U$, and the dust and perfect-fluid models of [[def-gr-dust-matter-model]] and [[def-gr-perfect-fluid-matter-model]].

[L1] $\nabla$ is torsion-free and $g$-compatible; the extension of $\nabla$ to tensor fields is a derivation commuting with contractions and $\nabla g=0$, $\nabla g^{-1}=0$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-metric-selected-connection]]).

[L2] For a smooth vector field $V$ on $U$, $\nabla_aV^a=g^{ab}\nabla_aV_b$; for smooth functions $f$, $\nabla_af=\partial_af$ and $\nabla_a\nabla_bf=\nabla_b\nabla_af$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L4] $u$ and $n$ are unit fields: $g(u,u)=-1$ and $g(n,n)=-1$ ([[def-gr-dust-matter-model]], [[def-gr-perfect-fluid-matter-model]]).

## Proof

**Proof technique:** direct; expand the divergence of each stress-energy tensor, contract and project along the unit timelike field, and use nondegeneracy to conclude the converse.

1.1 (Dust divergence.) By [L1], $\nabla^aT_{ab}=\nabla^a(\rho u_au_b)=u_b\nabla_a(\rho u^a)+\rho u^a\nabla_au_b$. Contracting with $u^b$ and using [L4], $u^b\nabla^aT_{ab}=-\nabla_a(\rho u^a)+\rho u^au_b\nabla_au^b$, and $u_b\nabla_au^b=\tfrac12\nabla_a(u_bu^b)=0$ because $g(u,u)=-1$ is constant; so $u^b\nabla^aT_{ab}=-\nabla_a(\rho u^a)$. [L1, L4, algebra]

1.2 (Fluid divergence.) By [L1], $\nabla^aT_{ab}=\nabla^a\bigl((\varepsilon+p)n_an_b\bigr)+\nabla_bp$, and $\nabla^a(n_an_b)=n_b\nabla_an^a+n^a\nabla_an_b=\vartheta n_b+a_b$. Hence $$\nabla^aT_{ab}=n_b\bigl(D\varepsilon+Dp+(\varepsilon+p)\vartheta\bigr)+(\varepsilon+p)a_b+\partial_bp,$$ where $Df=n^a\partial_af=n^a\nabla_af$ and $a_b=g_{bc}a^c$ by [L2]. [L1, L2, algebra]

2.1 (Dust equivalence.) If $\nabla^aT_{ab}=0$, then step 1.1 gives $\nabla_a(\rho u^a)=0$; substituting back into step 1.1 gives $\rho u^a\nabla_au_b=0$, and $\rho>0$ ([[def-gr-dust-matter-model]]) gives $u^a\nabla_au^b=0$. Conversely, if both dust-system equations hold, step 1.1 gives $\nabla^aT_{ab}=u_b\cdot0+\rho\cdot0=0$. This proves (a). [step 1.1, L4, algebra]

2.2 (Two projections.) Contracting step 1.2 with $n^b$ and using [L4], $n^bn_b=-1$ and $n^ba_b=0$: $$n^b\nabla^aT_{ab}=-\bigl(D\varepsilon+Dp+(\varepsilon+p)\vartheta\bigr)+n^b\partial_bp=-\bigl(D\varepsilon+(\varepsilon+p)\vartheta\bigr),$$ since $n^b\partial_bp=Dp$ and $Dp=n^b\nabla_bp$ by [L2]. Applying the projection $h^{cb}=g^{cb}+n^cn^b$ to step 1.2 kills the $n_b$-term and gives $h^{cb}\nabla^aT_{ab}=(\varepsilon+p)h^{cb}a_b+h^{cb}\partial_bp=(\varepsilon+p)a^c+h^{cb}\partial_bp$, where $h^{cb}a_b=a^c$ by the remark of [[def-gr-perfect-fluid-matter-model]] ($n^ba_b=0$). [step 1.2, L2, L4, algebra]

3.1 (Fluid equivalence.) If $\nabla^aT_{ab}=0$, then contracting step 1.2 with $n^b$ gives, by step 2.2, $D\varepsilon+(\varepsilon+p)\vartheta=0$, and projecting step 1.2 with $h^{cb}$ gives, again by step 2.2, $(\varepsilon+p)a^c+h^{cb}\partial_bp=0$. Conversely, suppose both fluid equations hold. By the projection identity $h_{b}{}^c\partial_cp=\partial_bp+n_bDp$, which follows from $h_b{}^c=\delta_b{}^c+n_bn^c$, the second equation reads $(\varepsilon+p)a_b=-\partial_bp-n_bDp$. Substituting this and the first equation into step 1.2, $$\nabla^aT_{ab}=n_b\bigl(D\varepsilon+(\varepsilon+p)\vartheta\bigr)+n_bDp-(\partial_bp+n_bDp)+\partial_bp=0 .$$ This proves (b). [step 1.2, step 2.2, L2, algebra] ∎

## Remarks

- **Role of $\rho>0$ and of the projections.** In (a) the strict positivity of the rest density is used in the converse direction to divide by $\rho$; on a region where the model has $\rho=0$ the equation $\rho u^a\nabla_au_b=0$ carries no information about $u$. In (b) the two displayed equations are the contraction and the rest-space projection of the divergence; together they are equivalent to the full covector equation because $W_b=-(W_cn^c)n_b+\bigl(W_b+(W_cn^c)n_b\bigr)$ for every covector $W$.

- **No equation of state used.** Neither equivalence uses an equation of state: the equations are identities for the tensor defined from $\varepsilon,p,n$ alone. A model that adds $p=P(\varepsilon)$ restricts the admissible tuples $(\varepsilon,p,n)$, it does not change the equivalence.
