# Separate actual-consumer example dimension repair

Exact item: `ex-signed-two-direction-multiedge-quiver-flag-crossing`. This is a distinct new stable defect scope, first round of at most two, under the changed supplier's same reviewer ownership. It does not reset the native Definition's new scope or any original global repair history. No native item or readiness file is edited here.

The item is a leaf in both the complete current native graph and canonical planned graph: it has no direct or indirect item consumers. The graph scan is recorded separately in `example-consumer-graph.json`. Its full current Statement and Strategy were read against the actual native Definition and the original genuine reviewed realization derivation. Sources and provenance remain unchanged; this turn makes no new claim of reading a paper or repeating an independent source audit.

## Exact arithmetic and the two dimension notions

Here $h_{ij}=2$, $h_{ji}=1$ and $\beta=2\alpha_i+\alpha_j$. The same-color flag dimension is $2(2-1)/2=1$. The actual incidence formula is

$$d_\mu=1+\sum_{a>b}h_{\mu_a\mu_b}.$$

For $\nu=(i,j,i)$, the unequal pairs are $(j,i)$ at $(2,1)$ and $(i,j)$ at $(3,2)$, so $d_\nu=1+1+2=4$. For $s_1\nu=(j,i,i)$, both later $i$ positions lie after the $j$, giving $d_{s_1\nu}=1+2+2=5$. For $s_2\nu=(i,i,j)$, the later $j$ lies after both $i$ positions, giving $d_{s_2\nu}=1+1+1=3$. Thus the two **separate** unequal crossings from $\nu$ have dimension differences $+1$ and $-1$.

By contrast $s_2s_1\nu=s_1\nu=(j,i,i)$ because the last two colors after $s_1$ are equal. Consequently $d_{s_2s_1\nu}-d_{s_1\nu}=0$, not $-1$. The native Statement's sequential expression is replaced by $d_{s_2\nu}-d_\nu=-1$.

Neither source/output dimension difference is the crossing-normalization exponent. For an unequal crossing the original reviewed geometric construction gives

$$d_{s_r\nu}-\dim_{\mathbb C}C_{s_r\nu,\nu}=h_{\nu_r\nu_{r+1}}.$$

This exponent is $2$ for $r=1$ and $1$ for $r=2$. The corresponding stratum-closure dimensions are $5-2=3$ and $3-1=2$. The standard-class normalization is $\sigma_re_\nu=(-1)^{h_{\nu_r\nu_{r+1}}}[C]_{\mathrm{standard}}$; the additional unequal-color factor gives $\tau_re_\nu=[C]_{\mathrm{standard}}$. The separate values $+1,-1$ instead enter the degree calculation $2h_{\nu_r\nu_{r+1}}+d_\nu-d_{s_r\nu}=3=-a_{ij}$ for both crossings. The new Strategy makes these notions explicit without changing an orientation or generator.

## Guarded before/after literals

`guarded-example-replacement.json` contains exact literals and current/prospective item hashes. Exactly two replacements are proposed:

1. In Statement, `$d_{s_2s_1\nu}-d_{s_1\nu}=h_{ji}-h_{ij}=-1$` becomes `$d_{s_2\nu}-d_\nu=h_{ji}-h_{ij}=-1$`.
2. In Strategy Step 1, the false `$d_{(i,i,j)}=1+4=5$` becomes `$d_{(i,i,j)}=1+2h_{ji}=1+2=3$`; the same paragraph spells out all three ranks, separate swaps, the equal-swap dimension zero, and the different normalization exponent.

All other fields and Strategy Steps 2–3 remain byte-for-byte unchanged, including the intended two-direction multiedge operators, signed cubic correction, degree conventions, sources, dependency list, generation metadata and AC declaration. `example-before.json` and `example-after.json` contain the exact full item preimage and candidate.

## Focused consistency with the displayed operators and braid polynomial

The initial crossings still have factors $(x_1-x_2)^2s_1$ and $(x_2-x_3)s_2$, respectively. In the two triple products the equal-color middle operator acts on $(i,i,j)$ or $(j,i,i)$ as stated, while the outside unequal crossing has the complementary arrow multiplicity. Correcting $d_{(i,i,j)}$ changes none of these word-dependent factors. With $x=x_1,y=x_2,z=x_3$, the local realization derivation gives the two triple products on an arbitrary polynomial $f$ as

$$T_2T_1T_2(f)=\frac{(y-z)^2(z-y)f-(y-z)^2(x-y)w_0(f)}{x-z},$$
$$T_1T_2T_1(f)=\frac{(x-y)(y-x)^2f-(x-y)(y-z)^2w_0(f)}{x-z}.$$

The permutation terms cancel. The remaining coefficient is

$$\frac{(x-y)^3-(z-y)^3}{z-x}=-\bigl[(x-y)^2+(x-y)(z-y)+(z-y)^2\bigr].$$

This verifies the displayed native correction, with no sign or factor change. The expression is nonzero since its $x^2$ coefficient is $-1$ in characteristic zero. The dimension corrections are therefore compatible with the actual displayed operators and retain the richest intended example.

`check-local-restorations.py` independently recomputes the dimensions from the actual arrow counts and checks the two triple operators with exact integer sparse-polynomial arithmetic on all 84 monomials of total degree at most six. It also checks the cubic polynomial identity exactly and asserts that the combined candidate differs in only the Definition.statement, this example.statement and this example.strategy, with every current guard still matching. The finite test supplements, rather than replaces, the displayed arbitrary-polynomial identity. `local-check-output.json` is a local arithmetic/guard receipt only; no native gate pass or whole-foundation proof acceptance is claimed.

`candidate47-combined.pages.json` combines the two guarded repairs for root's one integration pass. The Definition-only candidate remains available separately to distinguish the two exact stable scopes. Root should reject either literal replacement if its current hash or single-occurrence guard changes, then refresh the relevant focused review. All actual supplier-boundary caveats from the Definition repair remain in force.
