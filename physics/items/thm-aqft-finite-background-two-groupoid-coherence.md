---
id: "thm-aqft-finite-background-two-groupoid-coherence"
kind: "theorem"
title: "Coherence and stabilizers of finite background gauge 2-groupoids"
status: "published"
origin: "pipeline"
domain: "mathematics"
library: "mathematics"
dependency_level: 3
deps: ["def-aqft-finite-background-two-groupoid", "thm-aqft-two-group-background-consistency"]
dependency_roles: {"def-aqft-finite-background-two-groupoid": "mathematical-premise", "thm-aqft-two-group-background-consistency": "mathematical-premise"}
proof_strategy: "direct"
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources: {"references": [{"title": "Baez and Lauda, Higher-Dimensional Algebra V: 2-Groups", "url": "https://arxiv.org/pdf/math/0307200", "locator": "§8.3 pp.55–63; associator cocycle p.59 and monoidal coherence pp.60–61; explicit finite cochain 2-groupoid constructed locally."}, {"title": "Benini, Cordova and Hsin, On 2-Group Global Symmetries and Their Anomalies", "url": "https://arxiv.org/pdf/1803.09336", "locator": "§2.3, printed pp.18–20 / PDF19–21; background and gauge equations only, explicit coherence reconstructed locally."}]}
---

## Statement

For every finite ordered simplicial complex and finite data $(G,A,\rho,\beta)$ in the background gauge $2$-groupoid definition, its displayed operations define a finite $2$-groupoid, including the relative version for every subcomplex and fixed boundary field. Its raw $1$-arrows are not identified by their effects on background objects. For $x=(a,B)$,

$$
\pi_2(\mathcal B(K),x)=\ker(\delta_a:C^0(K;A)\to C^1(K;A)).
$$

If $S_x$ is the finite set of raw $1$-automorphisms at $x$, each $2$-isomorphism class in $S_x$ has $|\operatorname{im}\delta_a|$ elements, and

$$
|\pi_1(\mathcal B(K),x)|=|S_x|/|\operatorname{im}\delta_a|.
$$

The same assertions hold relatively, using vertex and edge cochains vanishing on the subcomplex. On a single vertex, $\pi_1=G$ and $\pi_2=A$, with associator determined by $\beta$.

## Statement references

[[def-aqft-finite-background-two-groupoid]]

[[thm-aqft-two-group-background-consistency]]

## Facts & Assumptions

**Given:** the finite cochain data and operations in the Statement.

[F1] [[def-aqft-finite-background-two-groupoid]] supplies the raw arrows, vertex $2$-cochains, composition correction $\tau$, associator $\sigma$, and $D=0$.

[F2] [[thm-aqft-two-group-background-consistency]] proves background preservation, the exact raw pairwise composition formula and the displayed reverse parameter. Its triangle calculation expands into six exact cocycle identities.

## Proof

1.1 For a vertex cochain, $(\delta_b^2t)_{ijk}=\rho_{b_{ij}}\rho_{b_{jk}}t_k-\rho_{b_{ij}}t_j-\rho_{b_{ik}}t_k+t_i+\rho_{b_{ij}}t_j-t_i=0$ by flatness. Hence adding $\delta_b t$ to an edge parameter preserves its target background. Addition, zero and negation give each hom-category its composition, identity and inverses. For horizontal composition, $c_{ij}h_j=h_i b_{ij}$ gives $\delta_c(\rho_h t)=\rho_h\delta_b t$, so changing the two input parameters by $\delta_b t,\delta_c s$ changes their composite by $\delta_c(\rho_h t+s)$. This proves that horizontal composition is a functor; its preservation of vertical sums and interchange follow from additivity. [given, F1, algebra]

1.2 For three consecutive arrows with vertex labels $g,h,k$, write $a,b,c,d$ for their edge backgrounds and $L=((k\circ h)\circ g)$, $R=k\circ(h\circ g)$. Set $\sigma_i=\beta(k_i,h_i,g_i)$. Expanding the four $\tau$ terms gives $\lambda_L-\lambda_R=\tau(k,h;b)+\tau(kh,g;a)-\rho_k\tau(h,g;a)-\tau(k,hg;a)$. On an edge $ij$, this difference plus $\rho_{d_{ij}}\sigma_j-\sigma_i$ is exactly $-D(k_i,h_i,g_i,a_{ij})+D(k_i,h_i,b_{ij},g_j)-D(k_i,c_{ij},h_j,g_j)+D(d_{ij},k_j,h_j,g_j)$: substitution of the five-term definition of $D$ cancels mixed products using $b_{ij}g_j=g_i a_{ij}$, $c_{ij}h_j=h_i b_{ij}$, and $d_{ij}k_j=k_i c_{ij}$. All four terms vanish. Thus $\lambda_R-\lambda_L=\delta_d\sigma$, exactly the required associator $2$-arrow. [given, F1, algebra]

1.3 The associator's vertex cochain depends only on the vertex labels, so its naturality reduces to commuting additions of $A$-cochains. For four consecutive arrows $g,h,k,l$, the difference of the two pentagon path labels at vertex $i$ is $\rho_{l_i}\beta(k_i,h_i,g_i)-\beta(l_i k_i,h_i,g_i)+\beta(l_i,k_i h_i,g_i)-\beta(l_i,k_i,h_i g_i)+\beta(l_i,k_i,h_i)=D(l_i,k_i,h_i,g_i)=0$. Normalization makes every composition correction with an identity arrow zero and every associator containing one identity label zero. Thus the units are strict and the triangle identity holds. [given, F1, algebra]

1.4 Given $f=(g,\lambda):x\to y$, choose the reverse $r=(g^{-1},\mu)$ from [F2]; its composite $r\circ f$ is the identity raw pair at $x$. Write $\eta$ for the edge label of $f\circ r$, whose vertex labels are identities at $y$. Substituting $(g,g^{-1},g)$ into the associator identity gives $\eta=-\delta_b\beta(g_i,g_i^{-1},g_i)$, since the left composite $((f\circ r)\circ f)$ has edge label $\eta+\lambda$ and the right composite $f\circ(r\circ f)$ has edge label $\lambda$. The vertex cochain $\beta(g_i,g_i^{-1},g_i)$ therefore gives a $2$-isomorphism $f\circ r\Rightarrow\mathrm{id}_y$. All $1$-arrows are equivalences. Restricting operations to a subcomplex commutes with every formula. For relative arrows, identity boundary vertex labels and zero boundary edge labels force all corrections and associators there to vanish, so relative arrows and their reverses remain relative. Finite label sets prove finiteness. [given, F1, F2, algebra]

1.5 A $2$-automorphism of the identity $1$-arrow is exactly a vertex cochain with $\delta_a t=0$. For fixed vertex labels of a raw automorphism, $2$-isomorphism identifies exactly its edge parameters differing by an element of $\operatorname{im}\delta_a$; these translations act freely on parameters. Consequently each class has that image's order and the asserted quotient count follows. At a single vertex there are no edge parameters and no differentials: raw $1$-labels are $G$, each has $A$ as its $2$-automorphisms, and different $G$-labels have no $2$-arrows between them. Thus $\pi_1=G$ and $\pi_2=A$. The same kernel/image argument applies to relative cochains. [given, F1, algebra]

2.1 The hom-category, composition, associator, unit and equivalence checks above establish all the specified $2$-groupoid axioms. The kernel/image counts establish the claimed stabilizers, including the single-vertex and relative cases. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
