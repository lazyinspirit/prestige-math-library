# Finite-regularity Morse–Sard prerequisite research

Read-only research for agent 10, 2026-09-24. I did not edit its Sard items.

## Authoritative passages read

Daniel Azagra, Juan Ferrera, and Javier Gómez-Gil, *The Morse–Sard theorem revisited*, arXiv:1511.05822v5, <https://arxiv.org/pdf/1511.05822v5>, actual PDF read:

- PDF p. 6, Theorem 2.1, explicitly states the Kneser–Glaeser rough-composition theorem: an `s`-flat `C^r` map `f` composed on a closed contact set with a `C^{r-s}` map `g` has a `C^r` extension agreeing with `f∘g` and remaining `s`-flat there. It cites Abraham–Robbin, *Transversal Mappings and Flows*, Theorem 14.1, for a Whitney-extension proof.
- PDF pp. 16–17, Claim 3.4, applies exactly this to the nonflat critical stratum: the nonzero derivative of order `s` gives a `C^{r-s}` hypersurface graph containing the `(s−1)`-flat stratum; rough composition restores full `C^r` regularity on that stratum; Sard induction in one fewer source dimension then applies.
- PDF p. 25 references identify Abraham–Robbin and Whitney 1934 precisely. The source's generalized theorem has extra machinery for weaker regularity; the current library needs only its classical `C^r` special case.

The existing cited Gualtieri notes, printed pp. 33–34, are insufficient for sharp finite regularity. On p. 33 they call a coordinate change built from a `j`th derivative of a `C^k` map `C^k`; it is generally only `C^{k-j}`. The same page claims an order-`k+1` Taylor bound from merely `C^k` data. The library's current flat-stratum lemma already uses the correct `o(|h|^r)` estimate, so the needed new repair is the nonflat-stratum composition step.

## Minimal reusable supplier and proof

The library already publishes `thm-whitney-extension-for-finite-order-euclidean-jets`, with an explicit constructive proof. One new lemma can supply the missing Kneser–Glaeser step. State only the needed range `0≤s<r`, `t=r−s≥1`: let `f:V→R^N` be `C^r` and have all derivatives of orders `1,…,s` zero on a relatively closed `A⊂V`; let `g:W→V` be `C^t`; set `A*=g⁻¹(A)`. Locally about each compact part of `A*`, there is `H∈C^r` equal to `f∘g` on `A*` and `s`-flat there. This local version suffices for the compact-stratum cover and avoids global gluing.

For `a∈A*`, write `G_a(h)=T_a^t g(a+h)` and let `P_a(h)` be the degree-at-most-`r` truncation of `T^r_{g(a)}f(G_a(h))`. These are explicit polynomial jets. On compact parts of `A*`, Taylor's theorem uniformly gives

```text
g(a+h)−G_a(h)=o(|h|^t),       G_a(h)−g(a)=O(|h|).
```

Because `f` is `s`-flat at `g(a)`, Taylor's theorem applied to `Df` gives `Df(g(a)+v)=O(|v|^s)` uniformly there. The mean-value estimate between `g(a+h)` and `G_a(h)` is therefore `o(|h|^t)O(|h|^s)=o(|h|^r)`. Taylor remainder for `f` and polynomial truncation give the uniform contact estimate

```text
f(g(a+h))−P_a(h)=o(|h|^r).
```

For nearby `a,b∈A*` and `d=|a−b|`, apply that estimate to both jets at every `z∈B(b,d)`. Then `P_a(z−a)−P_b(z−b)=o(d^r)` uniformly on the ball. A degree-`r` polynomial bounded by `o(d^r)` on a radius-`d` ball has, by rescaling and finite-dimensional norm equivalence, every `α`th derivative at its center bounded by `o(d^{r−|α|})`. Thus

```text
D^αP_a(b−a)−D^αP_b(0)=o(d^{r−|α|})    (|α|≤r),
```

the exact compatibility contract of the existing Whitney-extension theorem. Since `f` is `s`-flat, each `P_a` has no positive-degree terms through `s`; the extension is therefore `s`-flat on the contact set. To use the published Whitney theorem, intersect `A*` with a closed cube inside `W`; it is closed in Euclidean space, and the extension agrees on the cube interior.

For `K⊂C_j\setminus C_{j+1}` with `1≤j<r`, take `s=j`. A nonzero order-`j+1` derivative makes the zero set of an order-`j` derivative a `C^{r-j}` graph `g`; `C_j` lies in this graph. The new rough-composition lemma supplies `H∈C^r` on the `(m−1)`-dimensional graph parameter domain, with `H=f∘g` and `DH=0` on the preimage of `C_j`. The induction hypothesis for `C^{r-1}` or `C^r` maps from dimension `m−1` applies because `r-1>(m-1)-n` whenever `r>m-n` and `j<r`. Countably/local-finitely many graph charts cover the stratum; compact `K` needs finitely many.

The extreme `s=r` case, which would ask for only continuous `g`, is unnecessary and should not be included in the new lemma.
