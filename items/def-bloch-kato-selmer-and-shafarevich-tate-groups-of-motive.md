---
id: def-bloch-kato-selmer-and-shafarevich-tate-groups-of-motive
kind: definition
title: "Bloch–Kato Selmer and Shafarevich–Tate Groups of a Motive"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-grothendieck-motive-of-a-newform-and-realizations
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
  - def-axiom-of-choice
  - def-p-adic-period-rings
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: not-applicable
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
---

## Definition

Let $K$ be any number field and let $M$ be the central twist of a modular motive with coefficient field $F$. For each rational prime $p$ and each prime $\mathfrak p\mid p$ of $F$, write $E=F_{\mathfrak p}$ and $\mathcal O=\mathcal O_E$. Let $V=V_{\mathfrak p}$ be the $p$-adic realization restricted to $G_K$, let $T=T_{\mathfrak p}\subset V$ be the chosen $G_K$-stable $\mathcal O$-lattice, and put $W=A_{\mathfrak p}=V/T$, with its discrete topology. The vector space $V$ and lattice $T$ have their $p$-adic topologies. These are definitions relative to the stated motive, realization and lattice data, not existence assertions for those data.

**Cohomology convention.** For a topological abelian $G$-module $D$, write
$$H^1(G,D)=\{c:G\to D\text{ continuous}:c(gh)=c(g)+g c(h)\}/\{g\mapsto gd-d:d\in D\}.$$
For discrete coefficients this is the continuous-cochain convention of [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]. Fix compatible separable closures for the restriction maps, put $H^1(K,D)=H^1(G_K,D)$, and put $H^1(K_v,D)=H^1(G_{K_v},D)$ at each place $v$ of $K$. Changing the choices conjugates the maps and does not change the kernel conditions below.

**Local finite conditions on $V$.** At a finite place $v\nmid p$, let $I_v\subset G_{K_v}$ be inertia and define
$$H^1_f(K_v,V)=\ker\!\left(H^1(K_v,V)\longrightarrow H^1(I_v,V)\right).$$
At $v\mid p$, use the crystalline period ring $B_{\mathrm{cris},v}$ and its Galois action from [[def-p-adic-period-rings]], and define
$$H^1_f(K_v,V)=\ker\!\left(H^1(K_v,V)\longrightarrow H^1(G_{K_v},B_{\mathrm{cris},v}\otimes_{\mathbb Q_p}V)\right).$$
The map is induced by $x\mapsto1\otimes x$, with diagonal Galois action. The tensor product is over $\mathbb Q_p$, retaining the $E$-action on $V$. The period ring has its usual topology from the $p$-adic completion $A_{\mathrm{cris},v}$ and the direct limit of the modules $p^{-a}t^{-b}A_{\mathrm{cris},v}$; the tensor with the finite-dimensional $V$ has the corresponding finite-coordinate topology. This uses the supplied period-ring module, and asserts neither crystalline admissibility of $V$ nor a period comparison theorem. At an archimedean place set
$$H^1_f(K_v,V)=H^1(K_v,V).$$

**Propagation to the lattice and its quotient.** At EVERY place, including real places when $p=2$, let
$$i_v:H^1(K_v,T)\longrightarrow H^1(K_v,V),\qquad
q_v:H^1(K_v,V)\longrightarrow H^1(K_v,W)$$
be induced by $T\hookrightarrow V\twoheadrightarrow W$, and define
$$H^1_f(K_v,T)=i_v^{-1}\bigl(H^1_f(K_v,V)\bigr),\qquad
H^1_f(K_v,W)=q_v\bigl(H^1_f(K_v,V)\bigr).$$
Thus the $W$-condition is an IMAGE, not the unramified kernel on $W$ by fiat; the two can differ. Nor is it declared to be all of $H^1(K_v,W)$ at a real place. In fact $H^1(\mathbb R,V)=0$ by averaging over the order-two group in the characteristic-zero vector space, so its propagated image is zero even when $H^1(\mathbb R,W)$ has $2$-torsion.

**Finite lattice levels.** Put $W_r=p^{-r}T/T=W[p^r]$. The map $T/p^rT\xrightarrow{\sim}W_r$ is $t\mapsto p^{-r}t+T$, and the inclusions $W_r\hookrightarrow W_{r+1}$ correspond to $t\bmod p^rT\mapsto pt\bmod p^{r+1}T$. Set
$$H^1_f(K_v,W_r)=\bigl(H^1(K_v,W_r)\to H^1(K_v,W)\bigr)^{-1}H^1_f(K_v,W).$$
These are compatible local conditions and
$$W=\varinjlim_r W_r,\qquad H^1_f(K_v,W)=\varinjlim_r H^1_f(K_v,W_r),$$
where the latter identification is via the natural cohomology maps; they need not be injective at finite levels. Indeed a continuous cocycle from the compact group $G_{K_v}$ into discrete $W$ has finite image and therefore lies in some $W_r$, and a coboundary witnessing equality also uses an element of some finite level. This proves the cohomology direct-limit identification and its finite-condition version by the displayed preimage definition. The lattice itself is $T=\varprojlim_r T/p^rT$, and $H^1(K_v,T)$ means continuous cocycles with values in this completed lattice. No exchange of $H^1$ with an arbitrary inverse limit, or equality of the $W_r$-condition with the image of the $T$-condition, is asserted.

**Global Selmer groups.** For $D=V,T,W$, define
$$H^1_f(K,D)=\ker\!\left(H^1(K,D)\longrightarrow
\prod_{v\text{ all places of }K}H^1(K_v,D)/H^1_f(K_v,D)\right).$$
The maps are localization followed by the quotient maps. The product includes all archimedean places. In particular the global group for $W$ is this kernel; it is not replaced by the global image of $H^1_f(K,V)$.

Set
$$X^{BK}_{\mathfrak p}(K,M):=H^1_f(K,A_{\mathfrak p})/H^1_f(K,A_{\mathfrak p})_{\mathrm{div}},\qquad X^{BK}(K,M):=\bigoplus_p\bigoplus_{\mathfrak p\mid p}X^{BK}_{\mathfrak p}(K,M),$$
where, for the $p$-primary group $J=H^1_f(K,A_{\mathfrak p})$, the subscript div denotes the sum of all divisible subgroups of $J$. This sum is divisible (take roots in the finitely many summands of each element), and contains every divisible subgroup, so it is the maximal divisible subgroup. Equivalently it is the maximal $p$-divisible subgroup, since multiplication by any prime different from $p$ is invertible on a $p$-primary group. The $p$-primary property follows from the same finite-image cocycle argument for $G_K$. These groups depend on the chosen lattice before their finiteness is established. No finiteness is asserted by the definition.

## Definition references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

## Facts & Assumptions

**Given:** A modular motive, a $p$-adic realization, and a stable lattice.

[F1] [[def-grothendieck-motive-of-a-newform-and-realizations]]: the motive has a two-dimensional étale realization over the chosen coefficient field.

[F2] [[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]: the attached representation is continuous and unramified outside the level and $p$.

[A1] [[def-axiom-of-choice]]: the source’s realization carrier uses AC for the required cohomological eigensummand data.

[F3] [[def-p-adic-period-rings]] supplies the typed crystalline period ring with its Galois action. Only this ring/module data is used in the local kernel definition; its construction, invariants and comparison theorems are separate obligations.

[F4] [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]] supplies the continuous-cochain convention for discrete coefficients. The degree-one cocycle quotient for the topological coefficients used here is explicitly written in the Definition.

## Construction scope and source notes

The local kernel formulas are Bloch–Kato (1990), (3.7.1)–(3.7.3), read in the retained text at printed353–354. Longo–Vigni §2.17.1 propagates local conditions to the lattice by preimage and to its quotient by image; Definition2.59 is the all-place global kernel, and Definition2.60 is the quotient by the maximal divisible subgroup. The retained published text at pages43–44 was read for those exact conventions. The definitions above supply the previously omitted local and lattice-level maps. They do not assert existence of the motive/realization package, the construction of the supplied period rings, a crystalline comparison, or finiteness of the Selmer or Shafarevich–Tate groups.
