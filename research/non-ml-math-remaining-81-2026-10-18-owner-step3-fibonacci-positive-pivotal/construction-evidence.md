# Finite positive pivotal construction for the displayed Fibonacci category

This is mathematical construction evidence only. No canonical source, gate,
hash, acceptance record, or native workflow output was changed. The underlying
pentagon, hexagon, dagger and rigidity checks are those of the currently read
`items/ex-qc-tqc-fibonacci-data.md`. This note supplies the additional pivotal
and spherical verification; it does not invoke an unproved general theorem
that every unitary fusion category has a canonical positive pivotal structure.

## Chosen duals and their action on every morphism

Write `D` for chosen left duality. Put `D(s)=s` for `s=1,tau`, use the identity
cup and cap for `1`, and use `h_tau=sqrt(phi)i` and `e_tau=h_tau^dagger` for
`tau`. The two snakes are exactly the already checked scalar `phi u=1`.
For `A=direct_sum_(s,p) s`, with its fixed isometric copy inclusions `I_(s,p)`,
put `D(A)=A` and

```
h_A = sum_(s,p) (I_(s,p) tensor I_(s,p)) h_s,
e_A = h_A^dagger.
```

These are maps `1 -> A tensor D(A)` and `D(A) tensor A -> 1`.
Every cross-copy term of either snake vanishes, and the diagonal term is the
simple snake, so these are dual pairs on every finite direct sum. The empty
sum has the unique zero cup/cap and its identity is the unique zero map.

For a morphism `f:A->B`, the evaluation mate identity shows that `D(f)` is
the ordinary block transpose `f_s^T`, with no complex conjugation. Indeed,
the coefficient at the `p,q` copies in
`e_B (id_(D(B)) tensor f)` is `sqrt(d_s)(f_s)_(p,q)`; the same coefficient in
`e_A (D(f) tensor id_A)` is `sqrt(d_s)(D(f)_s)_(q,p)`, where
`d_1=1,d_tau=phi`. The evaluation vanishes between unequal simple labels.
Thus the transpose satisfies the mate identity, which determines the dual
map uniquely by either snake. Consequently `D^2` is literally identity on
objects and on all morphism blocks, including zero and rectangular blocks.

## Exhaustive finite proof of pivotal monoidality

The remaining obligation is the tensor comparison of `D^2`; literal equality
of the underlying functor alone would not suffice.

Let

```
k_(A,B): D(B) tensor D(A) -> D(A tensor B)
```

be the unique dual-pair comparison from the canonical tensor dual to the
chosen dual. The canonical evaluation first evaluates the adjacent
`D(A),A` pair and then the `D(B),B` pair, with associators inserted. These
comparisons exist, are invertible, and give the usual coherent antimonoidal
duality, as established in the local proved item
`thm-left-duality-is-a-contravariant-antimonoidal-functor`. Applying it twice,
the double-dual tensor comparison in direction
`D^2(A) tensor D^2(B) -> D^2(A tensor B)` is

```
mu_(A,B) = D(k_(A,B))^(-1) k_(D(B),D(A)).
```

Both factors have the indicated types: the intermediate object is
`D(D(B) tensor D(A))`. This is also exactly the composite used in the local
proved item `thm-the-double-dual-is-a-monoidal-functor`.

There are only four ordered simple-input cases:

| `(a,b)` | source/target of `k_(a,b)` | check |
|---|---|---|
| `(1,1)` | `1` | Both tensor dual and chosen dual have the identity cup/cap, so `k=id`. |
| `(1,tau)` | `tau` | Strict unit identifications reduce both dual pairs to the chosen `tau` pair, so `k=id`. |
| `(tau,1)` | `tau` | The same strict-unit calculation gives `k=id`. |
| `(tau,tau)` | `1 direct_sum tau` | `k` is an invertible block diagonal map `diag(k_1,k_tau)` because distinct simples have zero Hom. |

For the last row `k_(b,a)=k_(a,b)` literally, as the ordered inputs coincide;
also `D(k_(a,b))=k_(a,b)^T=k_(a,b)` because each diagonal block is scalar.
Therefore `mu_(tau,tau)=k^(-1)k=id`, on both allowed root channels separately.
The three unit rows give `mu=id` as well. No assumption about the scalar
values of `k_1,k_tau`, or their signs, is needed for this argument.

For completeness, the actual nontrivial comparison can also be computed
from the source's existing four-strand pentagon bases. The canonical tensor
cup is the nested four-`tau` cup, with coefficient `phi` in tree
`T2=(a((bc)d))`, at coordinates `(bc,bcd)=(1,tau)` and total `1`. Move it
to `T4=((ab)(cd))` through `T3`: the source's total-`1` matrices give
`A5^(-1)A3=F`. Hence its column in the root-`1` pair basis is

```
phi F (1,0)^T = (phi u, phi v)^T = (1,sqrt(phi))^T.
```

This is exactly the chosen direct-sum cup for `tau tensor tau=1 direct_sum
tau`. The coevaluation compatibility that defines `k` therefore gives
`k_1=k_tau=1`. This optional calculation agrees with, but is unnecessary
for, the diagonal cancellation argument above.

To cover arbitrary finite objects without assuming any copy ordering,
use naturality of the double-dual tensor comparison. For every pair of
simple-copy inclusions `I:a->A`, `J:b->B`, since `D^2` is identity on maps,

```
mu_(A,B) (I tensor J) = D^2(I tensor J) mu_(a,b) = I tensor J.
```

The maps `I tensor J`, together with the simple channel inclusions in
`a tensor b`, exhaust the orthogonal direct-sum decomposition of `A tensor
B`. Thus `mu_(A,B)=id` on every block. For zero objects the assertion is
the unique empty-map equality. The unit comparison is identity because its
chosen cup and cap are identities. This proves, including the tensor and
unit conditions, that `j_A=id_A:A->D^2(A)` is a monoidal natural
isomorphism, hence a pivotal structure.

## Spherical trace and positivity

The left pivotal trace of `f:A->A` is
`e_(D(A)) (j_A f tensor id_(D(A))) h_A`. The right pivotal trace uses
`e_A (id_(D(A)) tensor f j_A^(-1)) h_(D(A))`. Since `D(A)=A` with the same
chosen cups and caps, in either case only diagonal copy terms survive.
Their values are

```
tr_L(f) = tr_R(f) = Tr(f_1) + phi Tr(f_tau).
```

This proves equality of left and right traces for every endomorphism,
and in particular `dim(1)=1`, `dim(tau)=phi` and
`dim(A)=m_1+phi m_tau`. As `D(A)=A`, it also verifies directly the
dimension-based definition in `def-spherical-structure`. All simple
dimensions are positive. For `f=g^dagger g`, the displayed trace is a sum
of positive weights times sums of squared absolute matrix entries; it is
nonnegative and vanishes only for `g=0`. Thus the trace is faithful positive
in precisely the finite matrix sense used here.

## Independent check of the parent's braided route

The alternative construction via the existing Drinfeld and twist-to-pivotal
theorems is also consistent with this construction. Define `theta_1=1`,
`theta_tau=x`, and extend centrally by direct sums. Its only nonunit
balancing checks on `tau tensor tau` are

```
root 1:   x^2 (x^(-1))^2 = 1,
root tau: x^2 (y^(-1))^2 = x, since x=y^2.
```

The three unit pairs are identities; naturality and direct sums exhaust
all further checks. In the local theorem's Drinfeld formula, start with
the right `tau` cup, reassociate by `F^(-1)=F`, exchange the first pair,
then cap that pair. The cap retains only its vacuum coordinate, so
`u_tau=phi F_(1,1) x^(-1)=x^(-1)`, whereas `u_1=1`.
Therefore `u theta` is precisely `j=id` on simples and all finite sums.
The orientation agrees with the local Drinfeld identity
`mu(u_A tensor u_B)=u_(A tensor B)c_(B,A)c_(A,B)` and the local twist law.

No mathematical gap was found in either route. The direct route above
has the advantage that it proves the pivotal comparison independently of
the braiding and uses only the already proved elementary duality suppliers.
