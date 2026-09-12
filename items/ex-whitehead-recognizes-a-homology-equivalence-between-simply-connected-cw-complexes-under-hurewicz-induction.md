---
id: "ex-whitehead-recognizes-a-homology-equivalence-between-simply-connected-cw-complexes-under-hurewicz-induction"
kind: "example"
title: "A simply connected CW homology equivalence is a homotopy equivalence under the stated choice conditions"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-cellular-approximation-for-maps-of-cw-pairs","lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes","thm-singular-chain-homotopy-formula","thm-long-exact-sequence-of-a-pair-in-singular-homology","thm-long-exact-sequence-of-relative-homotopy-groups","def-n-connected-cw-pair","lem-relative-hurewicz-comparison-through-a-choice-free-weak-model","def-weak-homotopy-equivalence","thm-whitehead-theorem","def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Corollary 4.33
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Assume the Axiom of Choice. If $f:X\to Y$ is a map of simply connected CW complexes inducing isomorphisms on all integral homology groups, then $f$ is a homotopy equivalence. If $X,Y$ are finite CW complexes, the same conclusion holds without any choice principle.

## Facts & Assumptions

[F1] [[thm-cellular-approximation-for-maps-of-cw-pairs]] deforms $f$ to a cellular map, without choice when $X$ is finite and with AC otherwise.

[F2] [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]] constructs the ordinary CW mapping cylinder of a cellular map, its source subcomplex and its explicit deformation onto the target, with all-basepoint homotopy isomorphisms of the retraction. It is finite when both endpoint complexes are finite.

[F3] [[thm-singular-chain-homotopy-formula]] proves homotopy invariance of induced homology maps by the prism identity. [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] supplies the pair sequence in integral homology.

[F4] [[thm-long-exact-sequence-of-relative-homotopy-groups]] supplies the based pair sequence, including its pointed-set tail. [[def-n-connected-cw-pair]] requires component-surjectivity and relative vanishing at every subspace basepoint.

[F5] [[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]] gives the actual relative Hurewicz isomorphism in the first possible nonzero degree for a CW pair with nonempty simply connected subspace, without choice.

[F6] [[def-weak-homotopy-equivalence]] requires component bijectivity and isomorphisms in every positive degree at every source basepoint. [[thm-whitehead-theorem]] turns a weak equivalence of CW complexes into a homotopy equivalence, choice-free for finite endpoint complexes and with AC in general.

[A1] [[def-axiom-of-choice]] is assumed only in the general branch. Its uses are the arbitrary-cell approximation in [F1] and the cellular approximation and compression-disk selection inside the general Whitehead theorem [F6].

## Verification

**Given:** The map $f$ and its integral homology isomorphisms. Simply connected includes nonempty and path connected.

1.1 Apply [F1] to the empty fixed subcomplex to obtain a cellular map $g:X\to Y$ and a homotopy $E:f\simeq g$. Use its finite clause when $X,Y$ are finite; otherwise use [A1]. By the prism identity [F3], $g_*=f_*$ in each homology degree, so $g$ is also a homology equivalence. Form its ordinary CW cylinder $M$ with source $j:X\hookrightarrow M$, target $k:Y\hookrightarrow M$ and retraction $r:M\to Y$ in [F2]. Then $rj=g$, $rk=\mathrm{id}$ and $kr\simeq\mathrm{id}_M$. Thus $r_*$ in homology has inverse $k_*$ by [F3], and $j_*=r_*^{-1}g_*$ is an isomorphism in every degree. [F1, F2, F3, A1, given]

2.1 For $i\ge1$ consider $H_i(X)\xrightarrow{j_*}H_i(M)\to H_i(M,j(X))\xrightarrow{\delta}H_{i-1}(X)\xrightarrow{j_*}H_{i-1}(M)$. Since the rightmost map is injective, every relative class has zero boundary and comes from $H_i(M)$. Since the leftmost map is surjective, that entire image in the relative group is zero. Hence $H_i(M,j(X))=0$. In degree zero the relative group is the cokernel of the surjective $j_*:H_0(X)\to H_0(M)$, so it too is zero. [F3, step 1.1]

2.2 The space $M$ is path connected: each of its points has its cylinder track to $k(Y)$, and $Y$ is path connected. The retraction's all-basepoint homotopy isomorphisms [F2] show $\pi_1(M,j(x))=0$ for every $x\in X$, since $Y$ is simply connected. Both component sets of $j(X)$ and $M$ are singletons. The pointed tail in [F4] therefore shows that every relative degree-one class comes from $\pi_1(M,j(x))$ and is distinguished. Thus the CW pair $(M,j(X))$ is $1$-connected in the exact sense of [F4], and its subspace is nonempty and simply connected. [F2, F4, step 1.1]

3.1 Induct on the integer $n\ge2$. Suppose the pair is $(n-1)$-connected, starting with step 2.2. At each arbitrary $x\in X$, [F5] identifies $\pi_n(M,j(X),j(x))$ with $H_n(M,j(X))=0$ from step 2.1. Hence all these relative groups vanish, and the component condition is unchanged, so [F4] makes the pair $n$-connected. Induction proves vanishing in every positive relative degree at every $x$. This is induction on a property, not the selection of an infinite sequence of homotopies or inverse maps. In particular its use of [F5] is choice-free even though its all-data weak model can be infinite. [F4, F5, step 2.1, step 2.2]

4.1 For every $i\ge1$ the exact segment $\pi_{i+1}(M,j(X),j(x))\to\pi_i(X,x)\xrightarrow{j_*}\pi_i(M,j(x))\to\pi_i(M,j(X),j(x))$ has trivial outside terms by step 3.1. Exactness gives zero kernel and full image for the middle homomorphism. This also works for $i=1$, whose right outside object is pointed rather than a group. The component bijection was checked in step 2.2. Thus $j$ is weak by [F6]. The retraction in [F2] is weak at all basepoints, so $g=rj$ is weak, including its component map. [F2, F4, F6, step 2.2, step 3.1]

5.1 Apply Whitehead [F6] to $g:X\to Y$. Under [A1] its general clause applies. For finite $X,Y$, its finite clause applies and requires no choice; the preceding approximation used its finite clause and the Hurewicz comparison was choice-free. Let $h:Y\to X$ be the resulting homotopy inverse, so $hg\simeq\mathrm{id}_X$ and $gh\simeq\mathrm{id}_Y$. Composing $E$ with $h$ on its two sides gives $hf\simeq hg$ and $fh\simeq gh$. Concatenation gives both $hf\simeq\mathrm{id}_X$ and $fh\simeq\mathrm{id}_Y$, proving the conclusion for the original $f$. These are unbased homotopies, so the approximation never required an unstated fixed basepoint. [F6, A1, step 1.1, step 4.1]

6.1 Empty endpoint complexes are excluded by the stated meaning of simply connected; a point endpoint or an identity map satisfies the same argument. All relative homology groups, including degree zero, were checked in step 2.1, and the first induction degree $n=2$ meets [F5]'s simple-connectivity hypothesis by step 2.2. No finite-dimensional upper bound is needed for the induction on group vanishing. The finite branch has only finite approximation and finite Whitehead choices; the arbitrary branch uses [A1] exactly in [F1] and [F6]. Both homotopy-inverse identities are established in step 5.1, with no conclusion asserted for non-simply-connected spaces. [F1, F5, F6, A1, step 2.1, step 2.2, step 3.1, step 5.1] ∎
