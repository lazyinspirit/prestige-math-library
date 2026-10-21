# Step5 evidence hashes attest file bytes

Worker `supporting_evidence` and collection/certificate evidence maps bind SHA256
of the original file bytes. Binary sources such as PDFs must be hashed without
UTF-8 decoding. Invalid UTF-8 bytes otherwise become replacement characters,
changing a genuine digest and potentially hiding changes between distinct byte
sequences with identical decoded text.

The workflow's file-evidence checks use a dedicated raw-byte file digest.
`digest(string)` and `digest(object)` retain their existing text and JSON payload
semantics. Valid UTF-8 source, JSON and Markdown evidence therefore retain their
existing hashes. No report, receipt, source, certificate or expected hash is
rewritten by this change.

This applies to supporting-evidence validation/freezing, immutable collection
reuse, certification issuance/reuse and central certificate verification. The
existing metadata/ledger history fallback validators and their exact scopes
remain unchanged. Mutable JSON metadata still freezes through its ordinary
exact historical carrier. An unchanged binary PDF remains bound at its original
research path; changing its bytes invalidates the collection/certificate.

The focused workflow test uses a PDF-shaped binary fixture containing non-UTF8
bytes. It exercises actual collection, ordinary certification, cached collection
and certificate verification, then changes one byte so the raw digest differs
while decoded UTF-8 text remains identical. All reuse paths reject that change.
A non-ASCII UTF-8 JSON fixture and unchanged object payload digest verify the
text boundary. Fixtures assert hashing behavior and do not claim PDF parsing,
external-source reading or mathematical review.

Actual native execution, root collection, certification and gates remain owned by
the existing engine/root protocol; this mechanical fix does not advance them.
