---
id: cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations
kind: corollary
title: "Pure geometric braids and ordered configuration loops"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations,
       def-pure-braid-group-from-ordered-configurations,
       def-braid-group-from-unordered-configurations,
       def-geometric-braid-with-setwise-endpoints,
       def-endpoint-monodromy-of-a-configuration-loop,
       thm-configuration-braid-pure-braid-short-exact-sequence,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
       lem-a-geometric-braid-slices-to-a-configuration-loop,
       def-ordered-configuration-space,
       def-product-topology,
       lem-stacking-corresponds-to-loop-concatenation,
       thm-geometric-braids-form-a-group,
       def-induced-homomorphism-on-fundamental-groups,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       def-kernel-and-image-of-group-homomorphism,
       thm-image-subgroup-and-kernel-normal,
       def-injection-surjection-bijection,
       def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §§1.1–1.3, printed pp. 3–6"
      url: https://arxiv.org/pdf/1010.0321
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §2.1, equation (2.1), printed p. 11"
      url: https://arxiv.org/pdf/1010.0321
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, §1.1, author manuscript pp. 3–5"
      url: https://www.math.columbia.edu/~jb/Handbook-21.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Fix $n\in\mathbb N$ and the explicit base tuple $Q$ of
[[def-geometric-braid-with-setwise-endpoints]]. In
[[def-pure-braid-group-from-ordered-configurations]] and
[[def-braid-group-from-unordered-configurations]], instantiate the common
ordered basepoint at $q=Q$. Let $G_n$ be the geometric braid group at $Q$ and
let
$$\pi_{\mathrm{geo}}:G_n\longrightarrow S_n$$
be its endpoint-permutation homomorphism. Write
$$G_n^{\mathrm{pure}}:=\ker\pi_{\mathrm{geo}}.$$
Let
$$p:F_n(D^2)\longrightarrow C_n(D^2)$$
be the ordered-to-unordered quotient, with induced map
$$p_*:PB_n=\pi_1(F_n(D^2),Q)\longrightarrow B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[Q]),$$
and let $\pi_{\mathrm{conf}}:B_n^{\mathrm{conf}}\to S_n$ be endpoint
monodromy. Use the isomorphism
$$\Phi:G_n\longrightarrow B_n^{\mathrm{conf}},\qquad \Phi([\beta])=\bigl(\iota^C_*[S(\beta)]\bigr)^{-1}$$
from [[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]].
Then
$$\Phi(G_n^{\mathrm{pure}})=\ker\pi_{\mathrm{conf}}=\operatorname{im}p_*,$$
and $\Phi$ restricts to an isomorphism from $G_n^{\mathrm{pure}}$ onto this
kernel. The short exact sequence identifies $p_*$ as an isomorphism from
$PB_n$ onto the same kernel, so the resulting isomorphism to the ordered
configuration group is
$$\Psi:G_n^{\mathrm{pure}}\longrightarrow PB_n,\qquad \Psi([\beta])=\bigl(\iota^F_*[z_\beta]\bigr)^{-1},$$
where $z_\beta(t)=(z_1(t),\ldots,z_n(t))$ is the coordinate path of $\beta$.
For a pure braid, $z_\beta$ is a loop at $Q$. The inverse in this formula
accounts for the fact that stacking $\gamma\star\beta$ slices as the loop
$S(\beta)$ followed by $S(\gamma)$, while the geometric group product is
$[\gamma][\beta]$.

This holds for every $n\ge0$. The groups and maps use the same specified
basepoint $Q$; no change-of-basepoint path or Artin presentation is asserted.

## Facts & Assumptions

**Given:** $n$, the explicit tuple $Q$, a geometric braid class $[\beta]$ at $Q$, its endpoint permutation, the ordered and unordered configuration spaces and their quotient maps, and the fixed-basepoint isomorphism $\Phi$ above.

[L1] The geometric braid group $G_n$ at $Q$ is a group, its endpoint permutation $\pi_{\mathrm{geo}}:G_n\to S_n$ is a group homomorphism, and a braid is pure exactly when its endpoint permutation is the identity ([[thm-geometric-braids-form-a-group]], [[def-geometric-braid-with-setwise-endpoints]]).

[L2] The slice $S(\beta)(t)=[(z_1(t),\ldots,z_n(t))]$ is a continuous based loop in $C_n(\operatorname{int}D^2)$ at $[Q]$ ([[lem-a-geometric-braid-slices-to-a-configuration-loop]]).

[L3] For a based loop $\alpha$ at $[Q]$, there is a unique lift to $F_n(D^2)$ starting at $Q$ ([[def-endpoint-monodromy-of-a-configuration-loop]]).

[L4] At the exact basepoint $[Q]$, the parameterized definition gives $B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[Q])$, and raw slicing with the open-to-closed inclusion defines the isomorphism $\Phi([\beta])=(\iota^C_*[S(\beta)])^{-1}:G_n\to B_n^{\mathrm{conf}}$ ([[def-braid-group-from-unordered-configurations]], [[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]]).

[L5] The ordered and unordered open-to-closed inclusions induce isomorphisms $\iota^F_*$ and $\iota^C_*$ at $Q$ and $[Q]$, respectively ([[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[L6] With the parameterized base configuration set to $q=Q$, $$PB_n=\pi_1(F_n(D^2),Q)$$ and the open ordered configuration group maps to it by $\iota^F_*$ ([[def-pure-braid-group-from-ordered-configurations]]).

[L7] For the same $Q$, the quotient-induced homomorphism $p_*:PB_n\to B_n^{\mathrm{conf}}$ is injective and $$\operatorname{im}p_*=\ker\pi_{\mathrm{conf}}$$ ([[thm-configuration-braid-pure-braid-short-exact-sequence]]).

[L8] A pointed continuous map induces the homomorphism $f_*([\alpha])=[f\circ\alpha]$ ([[def-induced-homomorphism-on-fundamental-groups]]).

[L9] Loop classes use the first-loop-then-second product $[\alpha][\eta]=[\alpha*\eta]$, and the fundamental group is a group with two-sided inverses ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]).

[L10] For the stacking convention in which $\beta$ is below $\gamma$, $$[S(\gamma\star\beta)]=[S(\beta)][S(\gamma)]$$ ([[lem-stacking-corresponds-to-loop-concatenation]]).

[L11] The kernel of a group homomorphism is a subgroup, with kernel and image defined by its identity preimage and its values ([[def-kernel-and-image-of-group-homomorphism]], [[thm-image-subgroup-and-kernel-normal]]).

[L12] A group homomorphism that is injective and surjective is bijective, and a bijective group homomorphism is a group isomorphism ([[def-injection-surjection-bijection]], [[def-group-isomorphism-and-automorphism]]).

[L13] For $n=0$ there is one geometric braid, $PB_0$ is trivial, and $S_0$ is trivial ([[def-geometric-braid-with-setwise-endpoints]], [[def-pure-braid-group-from-ordered-configurations]], [[thm-configuration-braid-pure-braid-short-exact-sequence]]).

[L14] The inclusions and orbit quotients commute: $$\iota^C\circ p_{\operatorname{int}D^2}=p_{D^2}\circ\iota^F$$ ([[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[L15] Endpoint monodromy $\pi_{\mathrm{conf}}:B_n^{\mathrm{conf}}\to S_n$ is a group homomorphism ([[def-endpoint-monodromy-of-a-configuration-loop]]).

[L16] If $e_\alpha(i)$ is defined by $\widetilde\alpha(1)_i=q_{e_\alpha(i)}$, then $e_\alpha=\sigma_\alpha^{-1}$ under the specified label identification ([[def-endpoint-monodromy-of-a-configuration-loop]]).

[L17] The coordinate tuple $z_\beta:I\to F_n(\operatorname{int}D^2)$ is a continuous path starting at $Q$: its component motions are continuous and pairwise distinct at every time, and it stays in the interior. Its map to the product is continuous because the product topology is generated by projection preimages: each such preimage under $z_\beta$ is the open inverse image under a continuous component. Pairwise distinctness puts the image in the ordered-configuration subspace. For $n=0$ it is the constant empty tuple ([[def-geometric-braid-with-setwise-endpoints]], [[def-product-topology]], [[def-ordered-configuration-space]]).

[L18] The endpoint coordinates obey $z_j(1)=q_{\pi_{\mathrm{geo}}(\beta)(j)}$ ([[def-geometric-braid-with-setwise-endpoints]]).

[L19] For $n=1$, every geometric braid is pure, $PB_1$ is trivial, and $S_1$ is trivial ([[def-geometric-braid-with-setwise-endpoints]], [[def-pure-braid-group-from-ordered-configurations]], [[thm-configuration-braid-pure-braid-short-exact-sequence]]).

[L20] For a based loop $\alpha$ at $[Q]$, its unique lift from $Q$ ends at $\sigma_\alpha\cdot Q$ for the endpoint monodromy $\sigma_\alpha$ ([[def-endpoint-monodromy-of-a-configuration-loop]]).

The tuple $Q$ and the point motions $z_j$ are specified. The path $z_\beta$ is the unique lift of its unordered slice from $Q$, and injectivity of $p_*$ makes its ordered class unique. No arbitrary ordering, lift, representative, or connecting path is selected; the Axiom of Choice is not used.


## Proof

**Proof technique:** direct.

1.1 *Fix the shared basepoint and the pure subgroup.* In every parameterized configuration group take $q=Q$, so $PB_n$, $B_n^{\mathrm{conf}}$, both inclusion-induced maps, and $p_*$ are based at $Q$ or $[Q]$ as appropriate ([L4, L5, L6, L7]). By [L1], $\pi_{\mathrm{geo}}$ is a homomorphism and its identity fiber is exactly the set of pure geometric classes. By [L11] this set $G_n^{\mathrm{pure}}=\ker\pi_{\mathrm{geo}}$ is a subgroup of $G_n$. [L1, L11]

1.2 *The coordinate motion computes covering monodromy.* For any braid $\beta$, [L2] gives $p_{\operatorname{int}D^2}\circ z_\beta=S(\beta)$, and [L17] makes $z_\beta$ a path in the ordered configuration space. By the commutative square in [L14], $\iota^F\circ z_\beta$ is a lift, starting at $Q$, of $\iota^C\circ S(\beta)$ to $F_n(D^2)$. It is the unique such lift by [L3]. Its terminal coordinate satisfies $z_j(1)=q_{\pi_{\mathrm{geo}}(\beta)(j)}$ by [L18], so the label record $e$ of [L16] is $\pi_{\mathrm{geo}}(\beta)$. By [L20] the lift endpoint is $\sigma\cdot Q$ for endpoint monodromy $\sigma$, and [L16] gives $e=\sigma^{-1}$. The same coordinate tuple has label record $e=\pi_{\mathrm{geo}}(\beta)$ by [L18], while [L15] identifies $\pi_{\mathrm{conf}}=\sigma$. It follows that $$\pi_{\mathrm{conf}}\bigl(\iota^C_*[S(\beta)]\bigr) =\pi_{\mathrm{geo}}([\beta])^{-1}.$$ The use of the closed-disc lift here is valid because the open coordinate path is also a path in $F_n(D^2)$ and the quotient square in [L14] identifies its projection with $\iota^C\circ S(\beta)$. [L2, L3, L8, L14, L15, L16, L17, L18, L20]

2.1 *The inverse-loop map preserves the endpoint permutation.* Put $a:=\iota^C_*[S(\beta)]$. By [L15] and the inverse identity in the fundamental group [L9], $\pi_{\mathrm{conf}}(a^{-1})=\pi_{\mathrm{conf}}(a)^{-1}$: indeed $\pi_{\mathrm{conf}}(a)\pi_{\mathrm{conf}}(a^{-1})=\pi_{\mathrm{conf}}(aa^{-1})=1$. By [L4], $\Phi([\beta])=a^{-1}$, and step 1.2 gives $\pi_{\mathrm{conf}}(a)=\pi_{\mathrm{geo}}([\beta])^{-1}$. Thus for every $[\beta]\in G_n$, $$\pi_{\mathrm{conf}}(\Phi([\beta])) =\pi_{\mathrm{geo}}([\beta]).$$ Consequently $\Phi([\beta])$ lies in $\ker\pi_{\mathrm{conf}}$ if and only if $[\beta]$ lies in $G_n^{\mathrm{pure}}$. Since $\Phi$ is an isomorphism by [L4], its restriction is an isomorphism $G_n^{\mathrm{pure}}\to\ker\pi_{\mathrm{conf}}$. [L4, L9, L11, L12, L15, step 1.2]

3.1 *The short exact sequence identifies the ordered group with the kernel.* By [L7], $p_*:PB_n\to B_n^{\mathrm{conf}}$ is injective and has image $\ker\pi_{\mathrm{conf}}$. Regard its codomain as this image. Then it is surjective onto the kernel by the definition of image [L11], hence bijective by [L12]. It is a group homomorphism by [L7], so it is an isomorphism by [L12]. Composing its inverse with the restriction in step 2.1 gives an isomorphism $\Psi:G_n^{\mathrm{pure}}\to PB_n$. [L7, L11, L12, step 2.1]

4.1 *Compute the ordered representative.* If $[\beta]$ is pure, [L1] gives $z_\beta(0)=Q=z_\beta(1)$, so [L17] makes $z_\beta$ a based loop in $F_n(\operatorname{int}D^2)$ at $Q$. Using [L2], [L5], [L8], and [L14], $$p_*\bigl(\iota^F_*[z_\beta]\bigr) =[p\circ\iota^F\circ z_\beta] =[\iota^C\circ p_{\operatorname{int}D^2}\circ z_\beta] =\iota^C_*[S(\beta)].$$ Since $p_*$ is a homomorphism by [L7], it carries inverses to inverses: $p_*(x)p_*(x^{-1})=p_*(xx^{-1})=1$ for each $x$ by [L9]. Thus $$p_*\bigl((\iota^F_*[z_\beta])^{-1}\bigr) =\bigl(\iota^C_*[S(\beta)]\bigr)^{-1}=\Phi([\beta]).$$ The preimage under $p_*$ is unique by its injectivity [L7]; hence the isomorphism in step 3.1 is exactly $\Psi([\beta])=(\iota^F_*[z_\beta])^{-1}$. This also proves the formula is independent of the representative braid. [L1, L2, L4, L5, L7, L8, L9, L14, L17, L18, step 3.1]

5.1 *Check the product order explicitly.* Let $[\gamma],[\beta]$ be pure and put $a:=\iota^C_*[S(\gamma)]$ and $b:=\iota^C_*[S(\beta)]$. By [L1, L10] and the homomorphism property in [L8], $$\Phi([\gamma][\beta])=(ba)^{-1}.$$ In the group $B_n^{\mathrm{conf}}$, $a^{-1}b^{-1}$ is a two-sided inverse of $ba$: $(ba)(a^{-1}b^{-1})=b(aa^{-1})b^{-1}=1$ and $(a^{-1}b^{-1})(ba)=a^{-1}(b^{-1}b)a=1$. Thus $(ba)^{-1}=a^{-1}b^{-1}=\Phi([\gamma])\Phi([\beta])$. The composite $\Psi=p_*^{-1}\circ\Phi$ on pure classes is therefore multiplicative; this shows directly that inversion of the reversed slicing product gives the ordered configuration product in geometric stacking order. [L1, L4, L7, L8, L9, L10, step 3.1, step 4.1]

6.1 *Empty and one-strand cases.* For $n=0$, [L13] gives the unique empty braid and trivial $PB_0$ and $S_0$; exactness [L7] then makes $B_0^{\mathrm{conf}}$ trivial, so each group, kernel, and displayed map is the unique one-element group map. For $n=1$, [L19] says every geometric braid is pure and $PB_1$ and $S_1$ are trivial, so [L7] gives $B_1^{\mathrm{conf}}=\operatorname{im}p_*=\ker\pi_{\mathrm{conf}}$, also trivial. The isomorphism [L4] then makes $G_1^{\mathrm{pure}}$ trivial, and the formula in step 4.1 is the unique isomorphism. The zero-strand case is the empty case, and no additional zero-valued parameter is present. [L4, L7, L13, L19, step 2.1, step 3.1, step 4.1] $$\square$$
