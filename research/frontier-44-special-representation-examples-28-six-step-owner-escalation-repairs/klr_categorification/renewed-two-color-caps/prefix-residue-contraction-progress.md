# Final construction status

Both owned prerequisite carriers are now complete local drafts. The full terminal helper constructs the previously missing k0/k1 common map by actual relative-cap PBW projection, rather than a simultaneous finite flag coefficient ring. Its principal consumer owner has read the full proof and reported no additional gap; this is coordination, not native independent acceptance. See integration-proposals.json and local-checks.json for exact current carrier bindings.

The earlier progress note below is retained as historical construction evidence; its then-open obligations are resolved by the full helper's Steps 1.1–7.1. The old reciprocal raw crossing ratio was also diagnosed and assigned to the principal for correction.

# Actual prefix residue contraction: proved progress, assembly still open

The assigned prospective carrier is `lem-cyclotomic-klr-partial-frobenius-caps-satisfy-two-color-terminal-contractions`. No carrier is authored as proved: the complete three-case statement is not yet established. The calculation below establishes the terminal two-return case after an arbitrary downward prefix, including its actual cap identification. It does not establish the zero-return or one-return common external map.

## Actual cap on a polynomial terminal

Let $A=R_a^\Lambda(\gamma)$, let $\eta$ be any word of root weight $\gamma$, and set $h_i=\langle h_i,\Lambda-\gamma\rangle$. The actual cap $T_i^\gamma:e(\gamma,i)R_a^\Lambda(\gamma+\alpha_i)e(\gamma,i)\to A$ is the regular-module second counit from the compatible-dual-bases supplier. Its ordinary first unit sends $e(\eta)$ to $e(\eta i)$.

Put $q_{ij}(z,x)=Q_{ij}(z,x)/t_{ij}$, and expand all inverses at infinity. Define
$$R_i^\eta(z)=\frac{\prod_{a:\eta_a=i}(z-x_a)^2}{a_i(z)\prod_{a:\eta_a\ne i}q_{i\eta_a}(z,x_a)}.$$
This has leading power $z^{-h_i}$. The inverse monic factors have coefficients polynomial in the old dots; no old dot, root difference or value of $Q$ is inverted in $A$. For every $m\ge0$,
$$T_i^\gamma(e(\eta i)x_{n+1}^m)=e(\eta)[z^{-1}]z^mR_i^\eta(z).$$

Here is the map identification, rather than a choice of a convenient trace. The canonical first-adjoint isomorphism in the compatible-dual-bases supplier preserves the first unit. Applying its transported second counit to the ordinary first unit decorated with $m$ dots is consequently the formal counterclockwise bubble. Its literal dot count is $m$, hence its normalized coefficient index is $m-h_i+1$. The formal bubble is $\mathsf H_{\mu,m-h_i+1}$, with negative indices zero. At the vacuum $\mathsf H=a_i^{\rm rev}{}^{-1}$. Slide it, in chronological order, through the fixed downward prefix: an old $i$ root contributes $(1-x_at)^2$ to $\mathsf H$, and an old $j\ne i$ root contributes $q_{ij}^{\rm rev}(x_a,t)^{-1}$. Thus
$$\mathsf H_\eta(t)=\frac{\prod_{a:\eta_a=i}(1-x_at)^2}{a_i^{\rm rev}(t)\prod_{a:\eta_a\ne i}q_{i\eta_a}^{\rm rev}(x_a,t)},\qquad R_i^\eta(z)=z^{-h_i}\mathsf H_\eta(z^{-1}).$$
Extracting index $m-h_i+1$ is exactly the displayed residue formula. Each coefficient uses finitely many polynomial operations. This identifies the actual counit on every polynomial terminal, at every physical input weight, including $h_i\le0$.

The tuples $e(\eta)\mathsf H_{\eta,\ell}$ are central in $A$: equal-color crossings preserve the symmetric pair factors; distinct-color crossings interchange the color-variable pairs, and their dot relations have no correction. This is also the naturality of the transported bubble transformation. Only the commuting old-dot algebra is needed in the calculation below; centrality explains why arbitrary old algebra factors can be pulled using the actual bimodule identity for $T_i$.

## Typed two-return contraction

Fix distinct colors $i,j$ and put $B=R_a^\Lambda(\gamma+\alpha_i+\alpha_j)$. Let $u=x_{n+1}$ be the $i$ terminal and $v=x_{n+2}$ the $j$ terminal in the $\eta ij$ corner. Let $g(u,v)$ be a polynomial with coefficients in $e(\eta)Ae(\eta)$, written with those coefficients on the left. Append maps send each coefficient to both terminal corners. In the $\eta ji$ corner use the relabeled polynomial $g$, with $u$ still the $i$ variable and $v$ still the $j$ variable. Then both sides below are actual maps to $e(\eta)Ae(\eta)$:
$$T_i^\gamma T_j^{\gamma+\alpha_i}\big(e(\eta ij)Q_{ij}(u,v)g(u,v)\big)=t_{ji}\mathcal D_\eta(g),$$
$$T_j^\gamma T_i^{\gamma+\alpha_j}\big(e(\eta ji)Q_{ji}(v,u)g(u,v)\big)=t_{ij}\mathcal D_\eta(g),$$
where the common residual map is explicitly
$$\mathcal D_\eta(g)=[u^{-1}v^{-1}]g(u,v)R_i^\eta(u)R_j^\eta(v).$$

Indeed the actual inner $j$ cap on the first corner uses
$$R_j^{\eta i}(v)=\frac{t_{ji}R_j^\eta(v)}{Q_{ji}(v,u)}.$$
The Laurent expansion in $v$ has coefficients polynomial in $u$ and the old dots; the terminal quadratic identity $Q_{ji}(v,u)=Q_{ij}(u,v)$ cancels its denominator before the outer cap. The result of the inner cap is $t_{ji}[v^{-1}]g(u,v)R_j^\eta(v)$, a polynomial in $u$ with old-dot coefficients, so the actual outer cap formula applies. The other order is the identical calculation with $i,j$ interchanged. After cancellation, $R_i^\eta$ depends on $u$ and old dots only, and $R_j^\eta$ on $v$ and old dots only. Their coefficients commute. Both coefficient operations are finite on every fixed polynomial $g$, and coefficient extraction in distinct formal variables commutes. This establishes the same residual map at the prefix algebra $A$, before any prefix closure; it does not assume that the two actual partial flag categories share a coefficient ring.

Different polynomial representatives producing zero in a terminal corner give zero under its actual cap composition. Consequently, on the subspace generated by these matched polynomial-prefix terms, the displayed formula descends from polynomial lifts; no flatness or splitting argument is used. Applying the already constructed prefix functional $\epsilon_\eta$ gives the scalar two-return residual $D_2=\epsilon_\eta\mathcal D_\eta(g)$. This last operation is composition of known caps and requires no symmetry premise.

This handles every old PBW factor appearing in a reduced matching whose two terminal strands return to those same two terminal positions: choose a reduced word for its permutation in the subgroup fixing those positions, so its old PBW factor belongs to $A$ and can be pulled by $A$-bilinearity. The terminal opposite crossing multiplied by the singled-out crossing gives the quadratic $Q$. Dot transport uses the distinct-color dot relations and relabels $u,v$. Any braid correction is a separate shorter-crossing term; it is not claimed to have this same matching type.

The identities are integral monic-series identities and survive arbitrary monic field specialization, with grading forgotten. Their homogeneous degree in the standard branch is the sum of the two actual cap degrees. Zero corners satisfy them because they are identities of the actual cap compositions.

## Exact remaining obligations

The zero-return and one-return cases cannot be obtained by labeling two separately transported flag contractions with the same symbol $D_0$ or $D_1$. One must identify the residual map of the two actual constructions after their contractions, with source and target projectives specified and with the same outside factor maps.

For zero returns the residual boundary still has both distinguished channels. Inverting the handed $i$-partial mixed mate by its companion divided by $t_{ij}$ supplies an actual map in the $i$ transport; inverting the separately distinguished $j$ mate supplies a different actual map. A proof must identify their resulting residual morphisms through ordinary downward corner maps or explicitly compare their first-adjoint mate constructions. The normal-form supplier proves equivalence for each partial category separately, and does not itself supply this comparison.

For one return the same identification must also intertwine the actual returning-channel cap. The residue formula above controls a cap on terminal dot polynomials, but does not justify replacing an arbitrary mixed-word contraction by such a polynomial terminal without constructing the common downward retraction and checking its cap images.

An attempted shortcut was rejected: taking a partial mate is not a functor preserving arbitrary inverse maps. Thus the two local identities $a_ib_i=t_{ij}$ and $a_jb_j=t_{ji}$ cannot be combined merely by declaring a mate of an inverse to be the inverse of its mate. Establishing the requisite Beck-Chevalley/map-identification equation is itself part of the missing assembly.

The actual word perfectness in the word-trace supplier's steps 1.1–2.1 is independent and usable. Its steps 3.1–5.1 currently assert the unestablished common residual maps and must not be treated as a supplier for this construction. The intrinsic inversion-product rescaling becomes valid once all ordered crossing identities are genuinely proved; it does not fill this gap.

## Sources actually read

Fully read repository CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md; the current compatible-dual-bases helper, full word-trace draft, current flag-inverse helper, current oriented-PBW/cap-ideal helper, and corrected minimal-parabolic definition. Read the cached Webster text for complete Proposition 1.7 ending, complete Theorem 1.8 statement and proof, Remark 1.9, and visually inspected actual cached Figure 6 (printed p.21). Figure 6 specifies a pull in each pattern; the prose supplies no typed common-module identification beyond that picture. The cached v9 pagination is printed pp.19–22 for Theorem 1.8, not pp.16–17.

No claimed native acceptance, mathematical audit, precheck or renderer pass is recorded for the prospective complete helper: it does not exist as a proof-bearing carrier.
