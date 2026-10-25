---
id: "thm-aqft-finite-two-group-gauging-gluing"
kind: "theorem"
title: "Finite 2-group homotopy gauging and cochain gluing"
status: "draft"
origin: "pipeline"
domain: "mathematics"
library: "mathematics"
dependency_level: 5
deps: ["def-aqft-background-gauging-data", "def-aqft-finite-background-two-groupoid", "thm-aqft-finite-background-two-groupoid-coherence"]
dependency_roles: {"def-aqft-background-gauging-data": "mathematical-premise", "def-aqft-finite-background-two-groupoid": "mathematical-premise", "thm-aqft-finite-background-two-groupoid-coherence": "mathematical-premise"}
proof_strategy: "direct"
provenance:
  statement: ai-altered
  proof: ai-generated
sources: {"references": [{"title": "Moore and Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology", "url": "https://arxiv.org/pdf/2510.07408", "locator": "§23.3 PDF97–100 / printed96–99, especially (23.34)–(23.38); alternating homotopy-group measure, not an explicit proof of the local cochain gluing formula."}, {"title": "Baez and Lauda, Higher-Dimensional Algebra V: 2-Groups", "url": "https://arxiv.org/pdf/math/0307200", "locator": "§8.3 pp.55–63; associator cocycle p.59 and monoidal coherence pp.60–61; explicit finite cochain 2-groupoid constructed locally."}, {"title": "Benini, Cordova and Hsin, On 2-Group Global Symmetries and Their Anomalies", "url": "https://arxiv.org/pdf/1803.09336", "locator": "§2.3, printed pp.18–20 / PDF19–21; background and gauge equations only, explicit coherence reconstructed locally."}]}
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Fix a finite group $G$, finite abelian group $A$, action $\rho$, normalized $3$-cocycle $\beta$, and a finite ordered simplicial complex $K$. Let $\mathcal B(K)$ be the full background gauge $2$-groupoid, retaining its vertex $2$-gauge transformations, and let $W_K:\operatorname{Ob}\mathcal B(K)\to U(1)$ be constant on $1$-arrows. Let $V_K,E_K$ be the numbers of vertices and edges and define

$$
c(K)=\frac{|A|^{V_K-E_K}}{|G|^{V_K}}.
$$

Then its higher gauging sum satisfies

$$
Z_K^{(2)}(W_K)=\sum_{[x]}W_K(x)\frac{|\pi_2(\mathcal B(K),x)|}{|\pi_1(\mathcal B(K),x)|}=c(K)\sum_{x\in\operatorname{Ob}\mathcal B(K)}W_K(x).
$$

For any subcomplex $L$ and fixed field $s$ on $L$, the higher sum over the relative $2$-groupoid is

$$
Z_{K,L}^{(2)}(s)=\frac{c(K)}{c(L)}\sum_{x|_L=s}W_K(x).
$$

In particular let $K=K_1\cup_\Sigma K_2$, where the intersection is the subcomplex $\Sigma$ and all orders are induced. Assume invariant weights $W_i$ and $W_K$ obey $W_K(x)=W_2(x|_{K_2})W_1(x|_{K_1})$. Put $Z_i(s)=Z_{K_i,\Sigma}^{(2)}(s)$. These boundary functions are invariant on $1$-arrows of $\mathcal B(\Sigma)$ and obey the actual finite $2$-group gluing law

$$
Z_K^{(2)}(W_K)=\sum_{[s]\in\pi_0\mathcal B(\Sigma)}Z_2(s)Z_1(s)\frac{|\pi_2(\mathcal B(\Sigma),s)|}{|\pi_1(\mathcal B(\Sigma),s)|}.
$$

The empty complex has $c=1$ and one empty field. For a point and unit weight the sum is $|A|/|G|$. When $A$ is trivial these formulas reduce to ordinary finite flat $G$-connection normalization. The theorem assumes scalar invariant weights and their stated factorization; it does not assert that an arbitrary higher cocycle defines such boundary scalar data.

## Statement references

[[def-aqft-background-gauging-data]]

[[def-aqft-finite-background-two-groupoid]]

[[thm-aqft-finite-background-two-groupoid-coherence]]

## Facts & Assumptions

**Given:** the finite data, invariant weights, subcomplexes and factorization hypothesis in the Statement.

[F1] [[def-aqft-background-gauging-data]] defines higher integration with $|\pi_2|/|\pi_1|$ and exact relative fields.

[F2] [[def-aqft-finite-background-two-groupoid]] gives all objects, raw gauge parameters, affine composition and relative arrow conditions.

[F3] [[thm-aqft-finite-background-two-groupoid-coherence]] proves the $2$-groupoid laws, reverses and kernel/image stabilizer formulas.

## Proof

1.1 Fix $x=(a,B)$ and let $S_x$ be its raw $1$-automorphism set. By [F3], $|\pi_2(x)|=|\ker\delta_a|$ and $|\pi_1(x)|=|S_x|/|\operatorname{im}\delta_a|$. Since $\delta_a:C^0\to C^1$ is a homomorphism of finite abelian groups, its image has order $|A|^{V_K}/|\ker\delta_a|$. Hence $|\pi_2(x)|/|\pi_1(x)|=|A|^{V_K}/|S_x|$. For relative cochains the identical argument replaces $V_K$ by $V_K-V_L$. [given, F1, F2, F3, algebra]

1.2 There are $N=|G|^{V_K}|A|^{E_K}$ raw gauge parameters with source $x$, each having a target by [F3]. For any target $y$ in the component of $x$, fix a raw arrow $f:x\to y$. Composition $u\mapsto f\circ u$ identifies raw automorphisms at $x$ bijectively with raw arrows $x\to y$: its vertex equation uniquely solves for the vertex labels of $u$, and its edge equation uniquely solves for its edge labels since the coefficient of each is the automorphism $\rho_{g_f}$. The solved vertex labels fix $a$ because both resulting arrows have target edge labels of $y$. The solved edge labels fix $B$ because $f$ is affine with invertible linear coefficient on $B$, and $f$ already sends $x$ to $y$. Thus the solved parameter is indeed in $S_x$. Therefore each target has $|S_x|$ arrows from $x$, and this component has $N/|S_x|$ objects. The same argument is relative: compositions and inverses retain identity/zero boundary labels and the parameter count is $N_{K,L}=|G|^{V_K-V_L}|A|^{E_K-E_L}$. [given, F2, F3, algebra]

1.3 Every fixed raw parameter acts bijectively on all background objects: the edge formula determines the original edge labels uniquely and the face formula is affine in $B$ with invertible coefficient $\rho_g$. The source-wise reverse from [F3] shows the inverse preserves the background constraints. A boundary parameter on $L$ extends to a raw bulk parameter by identity labels on other vertices and zero labels on other edges. This bijection carries the set of extensions of $s$ to that of its transformed boundary field and preserves $W_K$. Thus relative extension sums, and hence their normalized versions, are invariant under boundary $1$-arrows. [given, F2, F3, construct]

1.4 Local equations identify a field on $K_1\cup_\Sigma K_2$ with exactly a pair of fields agreeing on $\Sigma$: each simplex lies in one of the subcomplexes, so assignments glue uniquely and all flatness and tetrahedron equations remain valid. Vertex and edge counts satisfy inclusion-exclusion, so $c(K)=c(K_1)c(K_2)/c(\Sigma)$. [given, F2, algebra]

2.1 On each component the weight is constant. Its higher mass by step 1.1 is $|A|^{V_K}/|S_x|$, while its unnormalized object sum has $N/|S_x|$ terms by step 1.2. Their ratio is $|A|^{V_K}/N=c(K)$. Summing gives the absolute formula. Relatively the ratio is $|A|^{V_K-V_L}/N_{K,L}=c(K)/c(L)$, including empty extension sets. This proves the relative formula and, with step 1.3, boundary invariance. [given, F1, step 1.1, step 1.2, step 1.3, algebra]

3.1 By step 2.1, the object-sum form of the proposed boundary integral is $c(\Sigma)\sum_s Z_2(s)Z_1(s)$. Substituting the two relative formulas gives $c(K_2)c(K_1)/c(\Sigma)$ times $\sum_s\sum_{x_2|_\Sigma=s}\sum_{x_1|_\Sigma=s}W_2(x_2)W_1(x_1)$. Step 1.4 and weight factorization identify this with $c(K)\sum_xW_K(x)=Z_K^{(2)}$. Applying the absolute formula on $\Sigma$ to the invariant product $Z_2Z_1$ converts its object sum to the stated $\pi_2/\pi_1$ boundary sum. The formula for complex-valued invariant products follows from the same component counting, which uses only constancy and finite addition, not unit modulus. [given, F1, step 1.4, step 2.1, algebra]

4.1 The empty and point cases follow by inserting their vertex/edge counts and object sets. If $A$ is trivial, the only $2$-gauge labels are zero and $c(K)=|G|^{-V_K}$, yielding ordinary finite flat-connection normalization. The finite sums, relative formula, invariance and gluing identity have all been established under precisely the stated weight hypotheses. [given, F1, step 2.1, step 3.1, algebra] ∎
