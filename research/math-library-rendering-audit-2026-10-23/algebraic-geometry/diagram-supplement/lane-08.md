# Lane 08: Čech complex diagram supplement

**Item:** `lem-projective-cech-finiteness-and-serre-vanishing-for-etale-lifting`  
**Disposition:** Optional diagram is viable, provided the index and sign conventions below are explicit.

The assigned current snapshot hash matches the assignment (`192a36b…f543d`). Both assigned local screenshots were reviewed at original resolution; the rendered proof text agrees with the snapshot. No diagram is needed to repair a rendering defect.

## Indexing and boundary cases

For the standard cover indexed by `{0,…,N}`, Čech degree `q` has summands on increasing subsets `I` with `|I|=q+1`. A Laurent monomial with negative-index set `J={i:e_i<0}` occurs on exactly those intersections for which `J ⊆ I`.

- `J=∅`: all nonempty `I` occur; the ordinary, non-augmented simplex cochain complex has `H⁰=A` and no higher cohomology.
- `J={0,…,N}`: only the full intersection occurs, in degree `N`, giving one copy of `A` there.
- For nonempty proper `J`, choose `k∉J`. With the standard alternating restriction differential and increasing tuple order, the cochain contraction can be written
  ` (h c)_I = (-1)^{#{i∈I : i<k}} c_{I∪{k}} ` when `k∉I`, and zero when `k∈I`.
  The component on the right exists because `J⊆I` implies `J⊆I∪{k}`. This convention gives `δh+hδ=id` on the subcomplex. The choice of `k` and the sign should appear together in any illustration; “insert with the usual alternating sign” alone leaves the convention implicit.

## Double-complex depiction

The refinement argument in proof 1.1 and the monomial decomposition in proof 2.1 are related Čech arguments but are not the same grid. If one diagram combines them, label the two directions and bidegree `(p,q)`. Under the convention `d_tot=d_h+(-1)^p d_v`, show the totalization sign on the vertical differential; state an equivalent convention if another is used. Explain which rows or columns are contracted and avoid suggesting that the monomial set `J` indexes the refinement direction.

The index insertion is an explanatory aid only. The proof text must continue to carry the argument, as required by repository instructions.
